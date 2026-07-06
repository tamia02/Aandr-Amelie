import { prisma } from "@/lib/db";
import { products as catalog } from "@/data/products";
import { updateProduct } from "@/lib/actions/admin-products";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  const dbProducts = await prisma.product.findMany({ orderBy: { slug: "asc" } });

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="font-serif text-2xl text-charcoal">Products</h1>

      <div className="mt-6 overflow-x-auto bg-cream">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="border-b border-charcoal/10 text-left text-xs font-semibold uppercase tracking-[0.1em] text-charcoal/50">
              <th className="px-5 py-3">Product</th>
              <th className="px-5 py-3">Price (paise) / Stock</th>
            </tr>
          </thead>
          <tbody>
            {dbProducts.map((product) => {
              const name = catalog.find((p) => p.slug === product.slug)?.name ?? product.slug;
              return (
                <tr key={product.slug} className="border-b border-charcoal/10 last:border-0">
                  <td className="px-5 py-4">
                    <p className="font-medium">{name}</p>
                    <p className="text-xs text-charcoal/50">{product.slug}</p>
                  </td>
                  <td className="px-5 py-4">
                    <form
                      action={updateProduct}
                      className="flex flex-wrap items-center gap-3"
                    >
                      <input type="hidden" name="slug" value={product.slug} />
                      <input
                        type="number"
                        name="priceCents"
                        defaultValue={product.priceCents}
                        min={0}
                        className="w-28 border border-charcoal/20 bg-transparent px-3 py-2"
                        aria-label="Price in cents"
                      />
                      <input
                        type="number"
                        name="stock"
                        defaultValue={product.stock}
                        min={0}
                        className="w-20 border border-charcoal/20 bg-transparent px-3 py-2"
                        aria-label="Stock"
                      />
                      <button
                        type="submit"
                        className="bg-moon-indigo px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-cream hover:opacity-90"
                      >
                        Save
                      </button>
                    </form>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="px-5 py-3 text-xs text-charcoal/50">
          Price is stored in paise (₹1 = 100). Enter e.g. 89900 for ₹899.
        </p>
      </div>
    </div>
  );
}
