import { prisma } from "@/lib/db";
import { addAdmin, removeAdmin } from "@/lib/actions/admin-settings";
import { requireAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  const currentUserEmail = await requireAdmin();
  const admins = await prisma.adminUser.findMany({ orderBy: { createdAt: "asc" } });

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="font-serif text-2xl text-charcoal">Settings</h1>
      
      <div className="mt-8 space-y-8">
        <section className="bg-cream p-6 shadow-sm">
          <h2 className="text-lg font-serif text-charcoal mb-4">Admin Accounts</h2>
          
          <div className="mb-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-charcoal/10 text-left text-xs font-semibold uppercase tracking-[0.1em] text-charcoal/70">
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Created</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin) => (
                  <tr key={admin.id} className="border-b border-charcoal/10 last:border-0">
                    <td className="px-4 py-3">
                      {admin.email}
                      {admin.email === currentUserEmail && <span className="ml-2 text-xs text-moon-indigo font-semibold">(You)</span>}
                    </td>
                    <td className="px-4 py-3 text-charcoal/70">
                      {admin.createdAt.toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {admin.email !== currentUserEmail && (
                        <form action={removeAdmin}>
                          <input type="hidden" name="email" value={admin.email} />
                          <button 
                            type="submit"
                            className="text-red-600 hover:text-red-800 text-xs font-semibold uppercase tracking-wider"
                          >
                            Remove
                          </button>
                        </form>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-charcoal/10 pt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Add New Admin</h3>
            <form action={addAdmin} className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                required
                className="flex-1 border border-charcoal/20 bg-transparent px-4 py-2 text-sm outline-none focus:border-moon-indigo"
              />
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                required
                minLength={8}
                className="flex-1 border border-charcoal/20 bg-transparent px-4 py-2 text-sm outline-none focus:border-moon-indigo"
              />
              <button 
                type="submit"
                className="bg-moon-indigo px-6 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-cream transition-opacity hover:opacity-90"
              >
                Add
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
