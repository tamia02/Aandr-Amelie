export async function createOrder(order: any) {
  const accessToken = process.env.ITHINK_ACCESS_TOKEN;
  const secretKey = process.env.ITHINK_SECRET_KEY;

  if (!accessToken || !secretKey) {
    console.warn("iThink Logistics API credentials not configured. Skipping order sync.");
    return null;
  }

  // Format order date as DD-MM-YYYY
  const orderDate = order.createdAt ? new Date(order.createdAt) : new Date();
  const formattedDate = `${String(orderDate.getDate()).padStart(2, '0')}-${String(orderDate.getMonth() + 1).padStart(2, '0')}-${orderDate.getFullYear()}`;

  const paymentMode = order.paymentMethod === "cod" ? "COD" : "Prepaid";

  const payload = {
    data: {
      shipments: [
        {
          waybill: "",
          order: order.id,
          sub_order: "",
          order_date: formattedDate,
          total_amount: (order.totalCents / 100).toFixed(2),
          name: order.customerName,
          company_name: "",
          add: order.addressLine1,
          add2: order.addressLine2 || "",
          add3: "",
          pin: order.pincode,
          city: order.city,
          state: order.state,
          country: "India",
          phone: order.phone,
          alt_phone: "",
          email: order.email,
          is_billing_same_as_shipping: "yes",
          products: order.items.map((item: any) => ({
            product_name: item.name,
            product_sku: item.productSlug,
            product_quantity: String(item.qty),
            product_price: (item.unitPriceCents / 100).toFixed(2),
            product_tax_rate: "0",
            product_hsn_code: "",
            product_discount: "0",
          })),
          shipment_length: "15", // Default dimensions in cm
          shipment_width: "10",
          shipment_height: "10",
          weight: "0.5", // Default weight in kg
          payment_mode: paymentMode,
          return_address_id: "",
          return_pin: "",
        }
      ],
      pickup_details: {
        pickup_name: "Aandré Amelie Warehouse",
        pickup_company_name: "Aandré Amelie",
        pickup_add: "123 Main Street", // TODO: Update with real address
        pickup_add2: "",
        pickup_add3: "",
        pickup_pin: "400001", // TODO: Update with real pincode
        pickup_city: "Mumbai",
        pickup_state: "Maharashtra",
        pickup_country: "India",
        pickup_phone: "9999999999", // TODO: Update with real phone
        pickup_email: "contact@aandreamelie.com",
      },
      access_token: accessToken,
      secret_key: secretKey,
    }
  };

  try {
    const response = await fetch("https://my.ithinklogistics.com/api_v3/order/add.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("iThink Logistics Order Creation Response:", data);
    return data;
  } catch (error) {
    console.error("Failed to sync order with iThink Logistics:", error);
    return null;
  }
}

export async function checkServiceability(pincode: string) {
  const accessToken = process.env.ITHINK_ACCESS_TOKEN;
  const secretKey = process.env.ITHINK_SECRET_KEY;

  if (!accessToken || !secretKey) {
    return { available: true, message: "Delivery available (Serviceability check skipped)." };
  }

  const payload = {
    data: {
      access_token: accessToken,
      secret_key: secretKey,
      pincode: pincode,
    }
  };

  try {
    const response = await fetch("https://my.ithinklogistics.com/api_v3/pincode/check.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    
    // iThink typically returns status code or available courier partners
    // If there's an error in status or no couriers, it might not be serviceable
    if (data.status === "error" || data.status_code === 400 || (data.data && data.data.length === 0)) {
      return { available: false, message: "Delivery is currently unavailable for this pincode." };
    }

    return { available: true, message: "Delivery available. Estimated 3-5 days." };
  } catch (error) {
    console.error("Failed to check pincode with iThink Logistics:", error);
    // Fail open if the API is down
    return { available: true, message: "Delivery available." };
  }
}
