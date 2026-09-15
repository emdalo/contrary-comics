import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Heart } from "../_libs/lucide-react.mjs";
import { c as cn, l as formatMoney, p as useCart } from "./site-shell-BvSAqMX6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-BGNlK6OL.js
var import_jsx_runtime = require_jsx_runtime();
function Badge({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-sm bg-surface px-2 py-0.5 text-xs font-bold tracking-wide text-ink", className),
		children
	});
}
function ProductCard({ product }) {
	const wish = useCart((s) => s.wishlist.includes(product.slug));
	const toggleWish = useCart((s) => s.toggleWish);
	const soldOut = product.stock <= 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative lift min-w-0 overflow-hidden rounded-md bg-surface p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/product/$slug",
			params: { slug: product.slug },
			className: "block min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-md bg-line",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: product.name,
					className: cn("aspect-portrait w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 transition-transform duration-500 ease-out", "group-hover:scale-105", soldOut && "opacity-70")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute left-3 top-3 flex gap-1.5",
					children: [
						product.isNew && !soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: "bg-teal text-teal-fg",
							children: "Nieuw"
						}) : null,
						soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: "bg-paper text-ink",
							children: "Uitverkocht"
						}) : null,
						!soldOut && product.stock <= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: "bg-forest text-forest-fg",
							children: "Laatste stuks"
						}) : null
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex min-w-0 items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-widest text-teal",
						children: label(product.category)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-lg font-bold leading-snug break-words text-teal",
						children: product.name
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "shrink-0 pt-5 text-sm font-bold tabular-nums text-ink",
					children: formatMoney(product.price)
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": wish ? "Verwijder van verlanglijst" : "Bewaar op verlanglijst",
			onClick: (e) => {
				e.preventDefault();
				toggleWish(product.slug);
			},
			className: "absolute right-5 top-5 flex size-11 items-center justify-center rounded-full bg-paper/90 text-ink shadow-[var(--shadow-border)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", wish && "fill-forest text-forest") })
		})]
	});
}
function label(category) {
	return {
		keramiek: "Keramiek",
		textiel: "Textiel",
		verlichting: "Verlichting",
		hout: "Hout"
	}[category];
}
//#endregion
export { ProductCard as t };
