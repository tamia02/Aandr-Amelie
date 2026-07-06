"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";

export interface CartItem {
  slug: string;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  addItem: (slug: string, qty?: number) => void;
  removeItem: (slug: string) => void;
  updateQty: (slug: string, qty: number) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "aandre-amelie-cart";
const listeners = new Set<() => void>();
const EMPTY_ITEMS: CartItem[] = [];
let cachedItems: CartItem[] | null = null;

function readStorage(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeStorage(items: CartItem[]) {
  cachedItems = items;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // storage unavailable (private browsing, quota, etc.) — cart still works in-memory for this tab
  }
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): CartItem[] {
  if (cachedItems === null) cachedItems = readStorage();
  return cachedItems;
}

function getServerSnapshot(): CartItem[] {
  return EMPTY_ITEMS;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const value = useMemo<CartContextValue>(() => {
    const addItem = (slug: string, qty = 1) => {
      const current = getSnapshot();
      const existing = current.find((i) => i.slug === slug);
      const next = existing
        ? current.map((i) => (i.slug === slug ? { ...i, qty: i.qty + qty } : i))
        : [...current, { slug, qty }];
      writeStorage(next);
    };

    const removeItem = (slug: string) => {
      writeStorage(getSnapshot().filter((i) => i.slug !== slug));
    };

    const updateQty = (slug: string, qty: number) => {
      if (qty <= 0) {
        removeItem(slug);
        return;
      }
      writeStorage(getSnapshot().map((i) => (i.slug === slug ? { ...i, qty } : i)));
    };

    const clear = () => writeStorage([]);

    return {
      items,
      itemCount: items.reduce((sum, i) => sum + i.qty, 0),
      addItem,
      removeItem,
      updateQty,
      clear,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
