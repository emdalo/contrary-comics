import { o as cartTotals } from "./site-shell-BJKVPhYj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders-BM9pa6Dc.js
var KEY = "noord-orders";
function readOrders() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return [];
		return JSON.parse(raw);
	} catch {
		return [];
	}
}
function writeOrders(orders) {
	localStorage.setItem(KEY, JSON.stringify(orders));
}
function nextId() {
	return `ND-${Math.floor(1e3 + Math.random() * 9e3)}`;
}
function placeOrder(items, customer, note) {
	const { lines, subtotal, shipping, total } = cartTotals(items);
	const order = {
		id: nextId(),
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		customer,
		note,
		lines: lines.map((l) => ({
			slug: l.slug,
			name: l.product.name,
			qty: l.qty,
			price: l.product.price,
			image: l.product.image
		})),
		subtotal,
		shipping,
		total
	};
	writeOrders([order, ...readOrders()]);
	return order;
}
function getOrder(id) {
	return readOrders().find((o) => o.id === id);
}
//#endregion
export { placeOrder as n, getOrder as t };
