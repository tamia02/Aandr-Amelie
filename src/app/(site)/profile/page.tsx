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
  
  // New UI State
  const [activeTab, setActiveTab] = useState<"orders" | "addresses">("orders");
  const [openAccordion, setOpenAccordion] = useState<string | null>("history");
  
  // Return form state
  const [returnOrderNum, setReturnOrderNum] = useState("");
  const [returnEmail, setReturnEmail] = useState("");

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

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
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
    <div className="max-w-3xl mx-auto px-5 sm:px-10 pt-10 pb-20">
      {/* Tabs */}
      <div className="flex justify-center gap-12 sm:gap-24 border-b border-outline-variant/30 mb-8">
        <button
          onClick={() => setActiveTab("orders")}
          className={`pb-3 text-sm font-semibold tracking-wide border-b-2 transition-colors ${
            activeTab === "orders"
              ? "border-charcoal text-charcoal"
              : "border-transparent text-charcoal/50 hover:text-charcoal/80"
          }`}
        >
          Orders
        </button>
        <button
          onClick={() => setActiveTab("addresses")}
          className={`pb-3 text-sm font-semibold tracking-wide border-b-2 transition-colors ${
            activeTab === "addresses"
              ? "border-charcoal text-charcoal"
              : "border-transparent text-charcoal/50 hover:text-charcoal/80"
          }`}
        >
          Addresses
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "orders" ? (
        <div className="space-y-0">
          {/* Order History Accordion */}
          <div className="border-b border-outline-variant/30">
            <button
              onClick={() => toggleAccordion("history")}
              className="flex w-full items-center py-5 text-left transition-colors hover:bg-black/5 px-2 -mx-2 rounded-sm"
            >
              <div className="flex items-center gap-4">
                <span className={`transition-transform duration-300 ${openAccordion === "history" ? "rotate-90" : "rotate-0"} text-charcoal`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="text-[11px] font-bold tracking-widest text-charcoal uppercase">ORDER HISTORY</span>
              </div>
            </button>
            {openAccordion === "history" && (
              <div className="pl-9 pr-4 pb-6 pt-2 animate-fade-in">
                {profile.orders.length === 0 ? (
                  <p className="text-sm text-charcoal/70">You haven't placed any orders yet.</p>
                ) : (
                  <div className="space-y-6">
                    {profile.orders.map((order: any) => (
                      <div key={order.id} className="rounded-sm border border-outline-variant/20 p-5 bg-cream">
                        <div className="flex flex-wrap justify-between gap-4 border-b border-outline-variant/20 pb-4 mb-4">
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-moon-indigo uppercase mb-1">
                              Order Placed
                            </p>
                            <p className="text-xs text-charcoal/80">
                              {new Date(order.createdAt).toLocaleDateString('en-IN', {
                                day: 'numeric', month: 'short', year: 'numeric'
                              })}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-moon-indigo uppercase mb-1">
                              Status
                            </p>
                            <p className="text-xs text-charcoal/80 capitalize">
                              {order.status}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-moon-indigo uppercase mb-1">
                              Total
                            </p>
                            <p className="text-xs text-charcoal/80">
                              {formatINR(order.totalCents)}
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {order.items.map((item: any) => (
                            <div key={item.id} className="flex justify-between items-center text-xs">
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
            )}
          </div>

          {/* Return / Exchange Accordion */}
          <div className="border-b border-outline-variant/30">
            <button
              onClick={() => toggleAccordion("return")}
              className="flex w-full items-center py-5 text-left transition-colors hover:bg-black/5 px-2 -mx-2 rounded-sm"
            >
              <div className="flex items-center gap-4">
                <span className={`transition-transform duration-300 ${openAccordion === "return" ? "rotate-90" : "rotate-0"} text-charcoal`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="text-[11px] font-bold tracking-widest text-charcoal uppercase">RETURN / EXCHANGE / ALTERATIONS</span>
              </div>
            </button>
            {openAccordion === "return" && (
              <div className="pl-9 pr-4 pb-6 pt-2 animate-fade-in">
                <p className="text-xs text-charcoal/80 font-medium leading-relaxed mb-6">
                  Please ensure the correct pieces for the return & exchange are handed over to the delivery executive. We take no liability in case incorrect pieces are handed over.
                </p>
                <div className="space-y-4 max-w-sm">
                  <div>
                    <input
                      type="text"
                      placeholder="Order number"
                      value={returnOrderNum}
                      onChange={(e) => setReturnOrderNum(e.target.value)}
                      className="w-full border border-outline-variant/40 bg-white/50 px-4 py-3 text-sm focus:border-charcoal focus:outline-none placeholder:text-charcoal/40"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Email address"
                      value={returnEmail}
                      onChange={(e) => setReturnEmail(e.target.value)}
                      className="w-full border border-outline-variant/40 bg-white/50 px-4 py-3 text-sm focus:border-charcoal focus:outline-none placeholder:text-charcoal/40"
                    />
                  </div>
                  <button className="w-full bg-charcoal text-cream py-3.5 text-[11px] font-bold tracking-widest uppercase transition-opacity hover:opacity-90 mt-2">
                    Find your order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Tailored Fit Details Accordion */}
          <div className="border-b border-outline-variant/30 mb-8">
            <button
              onClick={() => toggleAccordion("tailored")}
              className="flex w-full items-center py-5 text-left transition-colors hover:bg-black/5 px-2 -mx-2 rounded-sm"
            >
              <div className="flex items-center gap-4">
                <span className={`transition-transform duration-300 ${openAccordion === "tailored" ? "rotate-90" : "rotate-0"} text-charcoal`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="text-[11px] font-bold tracking-widest text-charcoal uppercase">TAILORED FIT DETAILS</span>
              </div>
            </button>
            {openAccordion === "tailored" && (
              <div className="pl-9 pr-4 pb-6 pt-2 animate-fade-in">
                <p className="text-xs text-charcoal/70 italic">
                  No tailored fit details found on this profile.
                </p>
              </div>
            )}
          </div>

          <div className="pt-4">
            <button 
              onClick={handleLogout}
              className="bg-charcoal px-8 py-3.5 text-[11px] font-bold tracking-widest text-cream uppercase hover:bg-charcoal/90 transition-colors"
            >
              LOGOUT
            </button>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in max-w-lg">
          <div className="rounded-sm bg-cream-deep p-6 sm:p-8 border border-outline-variant/20 mb-8">
            <h3 className="font-serif text-xl text-charcoal mb-4">My Information</h3>
            <div className="space-y-2 text-sm text-charcoal/70">
              <p><span className="font-semibold text-charcoal/90">Name:</span> {profile.name}</p>
              <p><span className="font-semibold text-charcoal/90">Email:</span> {profile.email}</p>
              {profile.phone && <p><span className="font-semibold text-charcoal/90">Phone:</span> {profile.phone}</p>}
            </div>
          </div>

          {(profile.addressLine1 || profile.city) ? (
            <div className="rounded-sm bg-cream-deep p-6 sm:p-8 border border-outline-variant/20">
              <h3 className="font-serif text-xl text-charcoal mb-4">Saved Address</h3>
              <div className="space-y-1 text-sm text-charcoal/70">
                {profile.addressLine1 && <p>{profile.addressLine1}</p>}
                {profile.addressLine2 && <p>{profile.addressLine2}</p>}
                <p>
                  {[profile.city, profile.state, profile.pincode].filter(Boolean).join(", ")}
                </p>
              </div>
            </div>
          ) : (
             <div className="rounded-sm bg-cream-deep p-6 sm:p-8 border border-outline-variant/20">
               <p className="text-sm text-charcoal/70 italic">No saved addresses.</p>
             </div>
          )}
        </div>
      )}
    </div>
  );
}
