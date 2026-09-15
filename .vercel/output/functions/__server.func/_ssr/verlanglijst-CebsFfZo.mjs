import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteShell, p as useCart, t as Button, u as getProduct } from "./site-shell-BJKVPhYj.mjs";
import { t as ProductCard } from "./product-card-DTp9O4kE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verlanglijst-CebsFfZo.js
var import_jsx_runtime = require_jsx_runtime();
function WishlistPage() {
	const wishlist = useCart((s) => s.wishlist);
	const hydrated = useCart((s) => s.hydrated);
	const items = hydrated ? wishlist.map((slug) => getProduct(slug)).filter((p) => p !== void 0) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-widest text-muted",
				children: "Bewaard"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl md:text-5xl",
				children: "Verlanglijst"
			}),
			!hydrated ? null : items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "Nog niets bewaard. Tik op het hart bij een object om het hier te houden."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-6",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/winkel",
						children: "Naar de collectie"
					})
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 md:gap-x-6",
				children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
			})
		]
	}) });
}
//#endregion
export { WishlistPage as component };
