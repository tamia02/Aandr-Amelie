"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";

interface WishlistContextValue {
  items: string[]; // array of slugs
  itemCount: number;
  hasItem: (slug: string) => boolean;
  toggleItem: (slug: string) => void;
  clear: () => void;
}

const WishlistContext = createContext<WishlistContextValue | null>(null);

const STORAGE_KEY = "aandre-amelie-wishlist";
const listeners = new Set<() => void>();
const EMPTY_ITEMS: string[] = [];
let cachedItems: string[] | null = null;

function readStorage(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeStorage(items: string[]) {
  cachedItems = items;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // storage unavailable
  }
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): string[] {
  if (cachedItems === null) cachedItems = readStorage();
  return cachedItems;
}

function getServerSnapshot(): string[] {
  return EMPTY_ITEMS;
}

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const value = useMemo<WishlistContextValue>(() => {
    const hasItem = (slug: string) => items.includes(slug);

    const toggleItem = (slug: string) => {
      const current = getSnapshot();
      const existing = current.includes(slug);
      const next = existing
        ? current.filter((i) => i !== slug)
        : [...current, slug];
      writeStorage(next);
    };

    const clear = () => writeStorage([]);

    return {
      items,
      itemCount: items.length,
      hasItem,
      toggleItem,
      clear,
    };
  }, [items]);

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within a WishlistProvider");
  return ctx;
}
