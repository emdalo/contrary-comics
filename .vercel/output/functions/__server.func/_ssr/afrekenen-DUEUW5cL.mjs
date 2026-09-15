import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteShell, c as cn, l as formatMoney, o as cartTotals, p as useCart, r as Input, t as Button } from "./site-shell-BJKVPhYj.mjs";
import { n as placeOrder } from "./orders-BM9pa6Dc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/afrekenen-DUEUW5cL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-ink", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-24 w-full rounded-md border border-line bg-surface px-3 py-2.5 text-sm text-ink", "placeholder:text-subtle", "transition-[box-shadow,border-color] duration-150", "focus-visible:border-forest focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-forest)_22%,transparent)]", className),
		...props
	});
}
function CheckoutPage() {
	const items = useCart((s) => s.items);
	const clear = useCart((s) => s.clear);
	const { lines, subtotal, shipping, total } = cartTotals(items);
	const navigate = useNavigate();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	function onSubmit(e) {
		e.preventDefault();
		if (lines.length === 0) return;
		const data = new FormData(e.currentTarget);
		const name = String(data.get("name") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const phone = String(data.get("phone") ?? "").trim();
		const street = String(data.get("street") ?? "").trim();
		const postal = String(data.get("postal") ?? "").trim();
		const city = String(data.get("city") ?? "").trim();
		const note = String(data.get("note") ?? "").trim();
		if (!name || !email || !street || !postal || !city) {
			setError("Vul de velden met een sterretje in.");
			return;
		}
		setBusy(true);
		const order = placeOrder(items, {
			name,
			email,
			phone,
			street,
			postal,
			city
		}, note);
		clear();
		navigate({
			to: "/bestelling/$id",
			params: { id: order.id }
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl md:text-5xl",
			children: "Afrekenen"
		}), lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "Je wagen is leeg. Kies eerst iets uit de collectie."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-6",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/winkel",
					children: "Naar de collectie"
				})
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "mt-10 grid gap-12 md:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Levering"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Dit is een demo-winkel. Er wordt niets echt verzonden of afgerekend."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Naam *",
								name: "name",
								autoComplete: "name",
								className: "sm:col-span-2"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "E-mail *",
								name: "email",
								type: "email",
								autoComplete: "email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Telefoon",
								name: "phone",
								type: "tel",
								autoComplete: "tel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Straat en nummer *",
								name: "street",
								autoComplete: "street-address",
								className: "sm:col-span-2"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Postcode *",
								name: "postal",
								autoComplete: "postal-code"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Gemeente *",
								name: "city",
								autoComplete: "address-level2"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "note",
									children: "Opmerking"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "note",
									name: "note",
									className: "mt-1.5",
									rows: 3
								})]
							})
						]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-danger",
						children: error
					}) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] md:col-span-2 md:self-start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Overzicht"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 divide-y divide-line",
						children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: line.product.image,
									alt: "",
									className: "size-14 rounded-sm object-cover outline outline-1 -outline-offset-1 outline-ink/10"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-medium",
										children: line.product.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted tabular-nums",
										children: ["× ", line.qty]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm tabular-nums",
									children: formatMoney(line.line)
								})
							]
						}, line.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 space-y-1.5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Subtotaal"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular-nums",
									children: formatMoney(subtotal)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Verzending"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular-nums",
									children: shipping === 0 ? "Gratis" : formatMoney(shipping)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between pt-2 text-base font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Totaal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular-nums",
									children: formatMoney(total)
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-subtle",
						children: "Inclusief BTW 21%. Betaling bij levering — demo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						className: "mt-5 w-full",
						disabled: busy,
						children: "Bestelling plaatsen"
					})
				]
			})]
		})]
	}) });
}
function Field({ label, name, type = "text", autoComplete, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: name,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id: name,
			name,
			type,
			autoComplete,
			className: "mt-1.5"
		})]
	});
}
//#endregion
export { CheckoutPage as component };
