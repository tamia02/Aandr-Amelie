"use client";

import { useState, useEffect } from "react";
import { submitNewsletterForm } from "@/lib/actions/newsletter";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleShow = () => {
      const hasSubmitted = sessionStorage.getItem("hasSubmittedNewsletter");
      if (!hasSubmitted) {
        setIsOpen(true);
      }
    };
    window.addEventListener("showNewsletterPopup", handleShow);
    return () => window.removeEventListener("showNewsletterPopup", handleShow);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);

    const result = await submitNewsletterForm(null, formData);

    if (result.error) {
      setError(result.error);
      return;
    }

    setSubmitted(true);
    sessionStorage.setItem("hasSubmittedNewsletter", "true");
    
    setTimeout(() => {
      setIsOpen(false);
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/50 p-4 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-cream p-8 shadow-2xl border border-sun-terracotta/20 animate-slide-up">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-charcoal/60 hover:text-moon-indigo transition-colors"
          aria-label="Close popup"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <span className="mb-2 block text-[10px] font-semibold tracking-[0.2em] text-sun-terracotta-dark uppercase">
            Join Our Family
          </span>
          <h2 className="mb-4 font-serif text-2xl leading-tight text-charcoal italic">
            Unlock 10% Discount on Every Product
          </h2>
          
          {submitted ? (
            <div className="my-8 py-4 bg-cream-deep/50 text-moon-indigo font-medium text-sm rounded-sm">
              Thank you for joining us, {name.split(' ')[0]}!
            </div>
          ) : (
            <>
              <p className="mb-6 font-sans text-xs text-charcoal/70 leading-relaxed">
                Sign up now to get your exclusive 10% off code and elevate your skincare ritual.
              </p>
              {error && <p className="mb-4 text-xs text-red-600">{error}</p>}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <div>
                  <label htmlFor="name" className="mb-1 block text-xs font-semibold uppercase tracking-widest text-charcoal/80">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-b border-outline-variant/30 bg-transparent py-2 text-sm text-charcoal outline-none transition-all focus:border-moon-indigo"
                    placeholder="Amelie"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="mb-1 block text-xs font-semibold uppercase tracking-widest text-charcoal/80">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b border-outline-variant/30 bg-transparent py-2 text-sm text-charcoal outline-none transition-all focus:border-moon-indigo"
                    placeholder="amelie@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1 block text-xs font-semibold uppercase tracking-widest text-charcoal/80">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border-b border-outline-variant/30 bg-transparent py-2 text-sm text-charcoal outline-none transition-all focus:border-moon-indigo"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-moon-indigo py-3 text-xs font-semibold tracking-[0.2em] text-cream uppercase transition-opacity hover:opacity-90 w-full"
                >
                  Get 10% Off
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
