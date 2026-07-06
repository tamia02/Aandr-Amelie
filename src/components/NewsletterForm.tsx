"use client";

import { useState } from "react";

export default function NewsletterForm({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="font-serif text-lg italic text-sun-terracotta-dark">
        Thank you for joining us. Welcome to the journey.
      </p>
    );
  }

  const isDark = tone === "dark";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className={`flex w-full max-w-md border-b ${
        isDark ? "border-cream/40" : "border-outline"
      }`}
    >
      <input
        type="email"
        required
        placeholder="Email Address"
        aria-label="Email address"
        className={`w-full bg-transparent py-2 text-sm italic focus:outline-none ${
          isDark
            ? "text-cream placeholder:text-cream/50"
            : "text-charcoal placeholder:text-charcoal/40"
        }`}
      />
      <button
        type="submit"
        className={`shrink-0 pl-4 text-xs font-semibold tracking-[0.15em] uppercase ${
          isDark ? "text-cream hover:opacity-70" : "text-moon-indigo hover:opacity-70"
        }`}
      >
        Subscribe
      </button>
    </form>
  );
}
