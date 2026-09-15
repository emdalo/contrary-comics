import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getProduct } from "./products";
import { shippingFor } from "./format";

export type CartItem = {
  slug: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
  wishlist: string[];
  drawerOpen: boolean;
  searchOpen: boolean;
  hydrated: boolean;
  setHydrated: () => void;
  setDrawerOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  toggleWish: (slug: string) => void;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      wishlist: [],
      drawerOpen: false,
      searchOpen: false,
      hydrated: false,
      setHydrated: () => set({ hydrated: true }),
      setDrawerOpen: (open) => set({ drawerOpen: open }),
      setSearchOpen: (open) => set({ searchOpen: open }),
      add: (slug, qty = 1) => {
        const product = getProduct(slug);
        if (!product || product.stock <= 0) return;
        const existing = get().items.find((i) => i.slug === slug);
        const nextQty = Math.min(product.stock, (existing?.qty ?? 0) + qty);
        if (existing) {
          set({
            items: get().items.map((i) => (i.slug === slug ? { ...i, qty: nextQty } : i)),
            drawerOpen: true,
          });
        } else {
          set({ items: [...get().items, { slug, qty: nextQty }], drawerOpen: true });
        }
      },
      setQty: (slug, qty) => {
        const product = getProduct(slug);
        if (!product) return;
        if (qty <= 0) {
          set({ items: get().items.filter((i) => i.slug !== slug) });
          return;
        }
        const next = Math.min(product.stock, qty);
        set({
          items: get().items.map((i) => (i.slug === slug ? { ...i, qty: next } : i)),
        });
      },
      remove: (slug) => set({ items: get().items.filter((i) => i.slug !== slug) }),
      clear: () => set({ items: [] }),
      toggleWish: (slug) => {
        const has = get().wishlist.includes(slug);
        set({
          wishlist: has ? get().wishlist.filter((s) => s !== slug) : [...get().wishlist, slug],
        });
      },
    }),
    {
      name: "noord-cart",
      partialize: (state) => ({ items: state.items, wishlist: state.wishlist }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    },
  ),
);

export function cartCount(items: CartItem[]) {
  return items.reduce((sum, i) => sum + i.qty, 0);
}

export function cartLines(items: CartItem[]) {
  return items
    .map((item) => {
      const product = getProduct(item.slug);
      if (!product) return null;
      return { ...item, product, line: product.price * item.qty };
    })
    .filter((line) => line !== null);
}

export function cartTotals(items: CartItem[]) {
  const lines = cartLines(items);
  const subtotal = lines.reduce((sum, l) => sum + l.line, 0);
  const shipping = shippingFor(subtotal);
  return { lines, subtotal, shipping, total: subtotal + shipping };
}
