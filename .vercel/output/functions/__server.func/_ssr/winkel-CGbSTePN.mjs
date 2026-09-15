import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteShell, c as cn, d as products, n as CATEGORIES } from "./site-shell-BJKVPhYj.mjs";
import { i as Route$2 } from "./router-DZBldg2I.mjs";
import { t as ProductCard } from "./product-card-DTp9O4kE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/winkel-CGbSTePN.js
var import_jsx_runtime = require_jsx_runtime();
function ShopPage() {
	const { cat = "all", sort = "featured" } = Route$2.useSearch();
	const navigate = Route$2.useNavigate();
	const listed = [...products.filter((p) => cat === "all" ? true : p.category === cat)].sort((a, b) => {
		if (sort === "price-asc") return a.price - b.price;
		if (sort === "price-desc") return b.price - a.price;
		if (sort === "new") return Number(b.isNew) - Number(a.isNew);
		return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
	});
	const title = cat === "all" ? "Collectie" : CATEGORIES.find((c) => c.id === cat)?.label ?? "Collectie";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-widest text-muted",
				children: "Winkel"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl md:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-lg text-sm leading-relaxed text-muted",
				children: "Twaalf objecten. Geen seizoenscollectie, geen restjes. Wat op is, is op."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: cat === "all",
						onClick: () => navigate({ search: {
							cat: "all",
							sort
						} }),
						children: "Alles"
					}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: cat === c.id,
						onClick: () => navigate({ search: {
							cat: c.id,
							sort
						} }),
						children: c.label
					}, c.id))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm text-muted",
					children: ["Sorteer", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: sort,
						onChange: (e) => navigate({ search: {
							cat,
							sort: e.target.value
						} }),
						className: "h-11 rounded-md border border-line bg-surface px-3 text-sm text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "featured",
								children: "Aanbevolen"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "new",
								children: "Nieuw"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "price-asc",
								children: "Prijs, laag–hoog"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "price-desc",
								children: "Prijs, hoog–laag"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted",
				children: [listed.length, " objecten"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 md:gap-x-6",
				children: listed.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
			})
		]
	}) });
}
function FilterChip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-11 rounded-full px-4 text-sm transition-colors duration-150", active ? "bg-forest text-forest-fg" : "bg-surface text-ink shadow-[var(--shadow-border)]"),
		children
	});
}
//#endregion
export { ShopPage as component };
