import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  size: string;
  qty: number;
};

type StoreState = {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeFromCart: (id: string, size: string) => void;
  updateQty: (id: string, size: string, qty: number) => void;
  clearCart: () => void;
  toggleWishlist: (slug: string) => void;
  inWishlist: (slug: string) => boolean;
  cartCount: number;
  cartTotal: number;
};

const StoreCtx = createContext<StoreState | null>(null);

function useLocal<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) setValue(JSON.parse(raw));
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  }, [key, value]);
  return [value, setValue] as const;
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useLocal<CartItem[]>("ia_cart", []);
  const [wishlist, setWishlist] = useLocal<string[]>("ia_wishlist", []);

  const addToCart: StoreState["addToCart"] = (item, qty = 1) => {
    setCart((prev) => {
      const idx = prev.findIndex((c) => c.id === item.id && c.size === item.size);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [...prev, { ...item, qty }];
    });
  };
  const removeFromCart: StoreState["removeFromCart"] = (id, size) =>
    setCart((prev) => prev.filter((c) => !(c.id === id && c.size === size)));
  const updateQty: StoreState["updateQty"] = (id, size, qty) =>
    setCart((prev) => prev.map((c) => (c.id === id && c.size === size ? { ...c, qty: Math.max(1, qty) } : c)));
  const clearCart = () => setCart([]);
  const toggleWishlist: StoreState["toggleWishlist"] = (slug) =>
    setWishlist((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  const inWishlist = (slug: string) => wishlist.includes(slug);

  const cartCount = cart.reduce((n, c) => n + c.qty, 0);
  const cartTotal = cart.reduce((n, c) => n + c.qty * c.price, 0);

  return (
    <StoreCtx.Provider
      value={{ cart, wishlist, addToCart, removeFromCart, updateQty, clearCart, toggleWishlist, inWishlist, cartCount, cartTotal }}
    >
      {children}
    </StoreCtx.Provider>
  );
}

export const useStore = () => {
  const ctx = useContext(StoreCtx);
  if (!ctx) throw new Error("useStore deve ser usado dentro de StoreProvider");
  return ctx;
};

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(n);
