"use server";

import { prisma } from "@/lib/db";

export async function getCustomerProfile(email: string) {
  if (!email) return null;

  try {
    const customer = await prisma.customer.findUnique({
      where: { email },
      include: {
        orders: {
          include: {
            items: true,
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    });

    return customer;
  } catch (error) {
    console.error("getCustomerProfile error:", error);
    return null;
  }
}
