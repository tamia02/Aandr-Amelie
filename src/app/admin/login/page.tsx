"use client";

import { useActionState } from "react";
import { adminLogin } from "@/lib/actions/admin-auth";

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(adminLogin, undefined);

  return (
    <div className="flex min-h-full flex-1 items-center justify-center bg-moon-indigo px-6 py-8">
      <form
        action={formAction}
        className="w-full max-w-sm bg-cream p-10 shadow-lg"
      >
        <h1 className="font-serif text-2xl text-charcoal">Admin</h1>
        <p className="mt-1 text-sm text-charcoal/60">Aandré Amelie back office</p>

        <label className="mt-8 block text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/60">
          Password
        </label>
        <input
          type="password"
          name="password"
          autoFocus
          required
          className="mt-2 w-full border border-charcoal/20 bg-transparent px-4 py-3 text-sm text-charcoal outline-none focus:border-moon-indigo"
        />

        {state?.error && (
          <p className="mt-3 text-sm text-red-700">{state.error}</p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="mt-6 w-full bg-moon-indigo px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {pending ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
