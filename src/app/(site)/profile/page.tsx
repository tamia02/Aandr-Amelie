"use client";

import { useEffect, useState } from "react";
import { getCustomerProfile } from "@/lib/actions/customers";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { formatINR } from "@/lib/money";

export default function ProfilePage() {
  const [email, setEmail] = useState("");
  const [isChecking, setIsChecking] = useState(true);
  const [inputEmail, setInputEmail] = useState("");
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
      loadProfile(storedEmail);
    } else {
      setIsChecking(false);
    }
  }, []);

  const loadProfile = async (targetEmail: string) => {
    setIsChecking(true);
    const data = await getCustomerProfile(targetEmail);
    setProfile(data);
    setIsChecking(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputEmail) return;
    localStorage.setItem("userEmail", inputEmail);
    setEmail(inputEmail);
    loadProfile(inputEmail);
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setEmail("");
    setProfile(null);
  };

  if (isChecking) {
    return (
      <div className="px-6 py-20 text-center sm:px-10">
        <p className="text-sm tracking-[0.2em] text-charcoal/50 uppercase">Loading profile...</p>
      </div>
    );
  }

  if (!email) {
    return (
      <div className="px-6 py-12 sm:px-10 md:py-20 max-w-lg mx-auto">
        <SectionHeader eyebrow="My Profile" title="Welcome Back" align="center" />
        <p className="mt-4 text-center text-sm text-charcoal/70">
          Enter the email address you used for your past orders to view your history.
        </p>
        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          <div>
            <input
              type="email"
              required
              placeholder="Email Address"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              className="w-full rounded-sm border border-charcoal/20 bg-transparent px-4 py-3 text-sm focus:border-sun-terracotta-dark focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-moon-indigo px-7 py-4 text-xs font-semibold tracking-[0.2em] text-cream uppercase transition-opacity hover:opacity-90"
          >
            View Profile
          </button>
        </form>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="px-6 py-12 sm:px-10 md:py-20 text-center">
        <SectionHeader eyebrow="My Profile" title="No History Found" align="center" />
        <p className="mt-4 text-sm text-charcoal/70">
          We couldn't find any orders for {email}.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/shop">Start Shopping</Button>
          <button onClick={handleLogout} className="text-xs tracking-[0.2em] text-charcoal/60 uppercase hover:text-moon-indigo underline">
            Use Different Email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-12 sm:px-10 md:py-20 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
        <SectionHeader eyebrow="My Profile" title={`Hello, ${profile.name.split(' ')[0]}`} />
        <button onClick={handleLogout} className="text-xs tracking-[0.2em] text-charcoal/60 uppercase hover:text-sun-terracotta-dark underline">
          Sign Out
        </button>
      </div>

      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div className="space-y-8">
          <div className="rounded-sm bg-cream-deep p-8 border border-outline-variant/20">
            <h3 className="font-serif text-xl text-charcoal mb-4">My Information</h3>
            <div className="space-y-2 text-sm text-charcoal/70">
              <p><span className="font-semibold text-charcoal/90">Name:</span> {profile.name}</p>
              <p><span className="font-semibold text-charcoal/90">Email:</span> {profile.email}</p>
              {profile.phone && <p><span className="font-semibold text-charcoal/90">Phone:</span> {profile.phone}</p>}
            </div>
          </div>

          {(profile.addressLine1 || profile.city) && (
            <div className="rounded-sm bg-cream-deep p-8 border border-outline-variant/20">
              <h3 className="font-serif text-xl text-charcoal mb-4">Saved Address</h3>
              <div className="space-y-1 text-sm text-charcoal/70">
                {profile.addressLine1 && <p>{profile.addressLine1}</p>}
                {profile.addressLine2 && <p>{profile.addressLine2}</p>}
                <p>
                  {[profile.city, profile.state, profile.pincode].filter(Boolean).join(", ")}
                </p>
              </div>
            </div>
          )}
        </div>

        <div>
          <h3 className="font-serif text-2xl text-charcoal mb-6 border-b border-outline-variant/30 pb-4">Product History</h3>
          {profile.orders.length === 0 ? (
            <p className="text-sm text-charcoal/70">You haven't placed any orders yet.</p>
          ) : (
            <div className="space-y-6">
              {profile.orders.map((order: any) => (
                <div key={order.id} className="rounded-sm border border-outline-variant/20 p-6 bg-cream">
                  <div className="flex flex-wrap justify-between gap-4 border-b border-outline-variant/20 pb-4 mb-4">
                    <div>
                      <p className="text-xs font-semibold tracking-widest text-moon-indigo uppercase mb-1">
                        Order Placed
                      </p>
                      <p className="text-sm text-charcoal/80">
                        {new Date(order.createdAt).toLocaleDateString('en-IN', {
                          day: 'numeric', month: 'short', year: 'numeric'
                        })}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest text-moon-indigo uppercase mb-1">
                        Status
                      </p>
                      <p className="text-sm text-charcoal/80 capitalize">
                        {order.status}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest text-moon-indigo uppercase mb-1">
                        Total
                      </p>
                      <p className="text-sm text-charcoal/80">
                        {formatINR(order.totalCents)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {order.items.map((item: any) => (
                      <div key={item.id} className="flex justify-between items-center text-sm">
                        <span className="text-charcoal/80 font-medium">
                          {item.name} <span className="text-charcoal/50 ml-2">× {item.qty}</span>
                        </span>
                        <span className="text-charcoal/70">{formatINR(item.totalCents)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
