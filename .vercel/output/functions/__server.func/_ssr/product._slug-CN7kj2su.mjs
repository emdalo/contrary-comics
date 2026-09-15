import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Heart } from "../_libs/lucide-react.mjs";
import { a as SiteShell, c as cn, f as relatedProducts, i as QtyStepper, l as formatMoney, n as CATEGORIES, p as useCart, t as Button, u as getProduct } from "./site-shell-BvSAqMX6.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as NotFound, n as Route } from "./router-BBF1BAyP.mjs";
import { t as ProductCard } from "./product-card-BGNlK6OL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-CN7kj2su.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route.useParams();
	const product = getProduct(slug);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductDetail, { product });
}
function ProductDetail({ product }) {
	const [qty, setQty] = (0, import_react.useState)(1);
	const add = useCart((s) => s.add);
	const wish = useCart((s) => s.wishlist.includes(product.slug));
	const toggleWish = useCart((s) => s.toggleWish);
	const soldOut = product.stock <= 0;
	const category = CATEGORIES.find((c) => c.id === product.category);
	const related = relatedProducts(product.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/winkel",
						className: "font-bold text-teal hover:text-forest",
						children: "Collectie"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-2",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/winkel",
						search: { cat: product.category },
						className: "font-bold text-teal hover:text-forest",
						children: category?.label
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-10 md:grid-cols-2 md:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-md bg-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.name,
						className: "aspect-portrait w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:sticky md:top-24 md:self-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-widest text-teal",
							children: category?.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-4xl font-extrabold md:text-5xl",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xl tabular-nums",
							children: formatMoney(product.price)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-base leading-relaxed text-muted",
							children: product.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-1.5 text-sm text-ink",
							children: product.details.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-teal" }), d]
							}, d))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-sm text-muted",
							children: [
								product.materials,
								" · ",
								product.madeIn
							]
						}),
						soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-sm font-medium",
							children: "Uitverkocht. Deze oplage is rond."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyStepper, {
								value: qty,
								max: product.stock,
								onChange: setQty
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								className: "flex-1",
								onClick: () => {
									add(product.slug, qty);
									toast.success(`${product.name} zit in je wagen`);
								},
								children: "In winkelwagen"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toggleWish(product.slug),
							className: "mt-4 inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-teal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", wish && "fill-forest text-forest") }), wish ? "Op je verlanglijst" : "Bewaar op verlanglijst"]
						}),
						product.stock > 0 && product.stock <= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-danger",
							children: [
								"Nog ",
								product.stock,
								" stuks."
							]
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-extrabold",
					children: "Ook in huis"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-4 md:gap-x-6",
					children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
				})]
			})
		]
	}) });
}
//#endregion
export { ProductPage as component };
