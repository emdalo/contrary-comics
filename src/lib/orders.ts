import { cartTotals, type CartItem } from "./cart";
import { getProduct } from "./products";

export type OrderCustomer = {
  name: string;
  email: string;
  phone: string;
  street: string;
  postal: string;
  city: string;
};

export type OrderLine = {
  slug: string;
  name: string;
  qty: number;
  price: number;
  image: string;
};

export type Order = {
  id: string;
  createdAt: string;
  customer: OrderCustomer;
  note: string;
  lines: OrderLine[];
  subtotal: number;
  shipping: number;
  total: number;
};

const KEY = "noord-orders";

function readOrders(): Order[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Order[];
  } catch {
    return [];
  }
}

function writeOrders(orders: Order[]) {
  localStorage.setItem(KEY, JSON.stringify(orders));
}

function nextId() {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `ND-${n}`;
}

export function placeOrder(items: CartItem[], customer: OrderCustomer, note: string): Order {
  const { lines, subtotal, shipping, total } = cartTotals(items);
  const order: Order = {
    id: nextId(),
    createdAt: new Date().toISOString(),
    customer,
    note,
    lines: lines.map((l) => ({
      slug: l.slug,
      name: l.product.name,
      qty: l.qty,
      price: l.product.price,
      image: l.product.image,
    })),
    subtotal,
    shipping,
    total,
  };
  const all = readOrders();
  writeOrders([order, ...all]);
  return order;
}

export function getOrder(id: string) {
  return readOrders().find((o) => o.id === id);
}

export function lineName(slug: string) {
  return getProduct(slug)?.name ?? slug;
}
