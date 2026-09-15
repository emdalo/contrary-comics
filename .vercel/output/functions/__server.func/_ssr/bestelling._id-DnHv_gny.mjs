import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteShell, l as formatMoney, t as Button } from "./site-shell-BvSAqMX6.mjs";
import { t as getOrder } from "./orders-9M1zQRWu.mjs";
import { r as Route$1 } from "./router-BBF1BAyP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bestelling._id-DnHv_gny.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OrderPage() {
	const { id } = Route$1.useParams();
	const [order, setOrder] = (0, import_react.useState)(void 0);
	(0, import_react.useEffect)(() => {
		setOrder(getOrder(id) ?? null);
	}, [id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-2xl px-4 py-16 md:py-24",
		children: order === void 0 ? null : order === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Bestelling niet gevonden"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Deze demo bewaart bestellingen alleen in deze browser."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-8",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/winkel",
					children: "Naar de collectie"
				})
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-bold uppercase tracking-widest text-teal",
				children: "Bevestiging"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-2 font-display text-4xl md:text-5xl",
				children: ["Dank je, ", firstName(order.customer.name)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-base leading-relaxed text-muted",
				children: [
					"Bestelling ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-ink",
						children: order.id
					}),
					" is geplaatst. Dit is een demo — er wordt niets verzonden of afgerekend. De samenvatting blijft bewaard in deze browser."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-md bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-widest text-teal",
						children: "Leveren aan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm leading-relaxed",
						children: [
							order.customer.name,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							order.customer.street,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							order.customer.postal,
							" ",
							order.customer.city
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 divide-y divide-line border-t border-line",
						children: order.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: line.image,
									alt: "",
									className: "size-14 rounded-sm object-cover outline outline-1 -outline-offset-1 outline-ink/10"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-medium",
										children: line.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted tabular-nums",
										children: ["× ", line.qty]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm tabular-nums",
									children: formatMoney(line.price * line.qty)
								})
							]
						}, line.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between pt-3 text-base font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Totaal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: formatMoney(order.total)
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-10",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/winkel",
					children: "Verder winkelen"
				})
			})
		] })
	}) });
}
function firstName(name) {
	return name.split(" ")[0] ?? name;
}
//#endregion
export { OrderPage as component };
