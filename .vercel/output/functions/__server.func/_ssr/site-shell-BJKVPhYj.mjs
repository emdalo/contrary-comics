import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Plus, c as Heart, i as Search, o as Minus, r as ShoppingBag, s as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-BJKVPhYj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	{
		id: "keramiek",
		label: "Keramiek"
	},
	{
		id: "textiel",
		label: "Textiel"
	},
	{
		id: "verlichting",
		label: "Verlichting"
	},
	{
		id: "hout",
		label: "Hout"
	}
];
var products = [
	{
		slug: "kom-linde",
		name: "Kom Linde",
		category: "keramiek",
		price: 68,
		image: "/products/kom-linde.jpg",
		tagline: "Wijd, mat, gemaakt om elke dag te gebruiken.",
		description: "Een stenen kom met een matte havermoutglazuur en een donkerder kleirand. Gedraaid in kleine oplagen in ons atelier. De vorm is wijd en laag — voor soep, granen, of gewoon op tafel als stil object.",
		details: [
			"Ø 18 cm, hoogte 7 cm",
			"Vaatwasserbestendig",
			"Elk stuk is uniek"
		],
		materials: "Steengoed, mat glazuur",
		madeIn: "Antwerpen",
		stock: 14,
		featured: true,
		isNew: true
	},
	{
		slug: "vaas-schelde",
		name: "Vaas Schelde",
		category: "keramiek",
		price: 124,
		image: "/products/vaas-schelde.jpg",
		tagline: "Ruwe klei, een druipende glazuur aan de hals.",
		description: "Een hoge vaas waarvan de buik onbehandeld blijft. Alleen de hals krijgt een havermoutglazuur dat langzaam naar beneden trekt. Sterk genoeg voor takken, mooi genoeg om leeg te laten.",
		details: [
			"Hoogte 32 cm, Ø 12 cm",
			"Waterdicht",
			"Handgedraaid"
		],
		materials: "Steengoed, rauwe klei en glazuur",
		madeIn: "Antwerpen",
		stock: 8,
		featured: true
	},
	{
		slug: "mokken-drie",
		name: "Set van drie mokken",
		category: "keramiek",
		price: 86,
		image: "/products/mokken-drie.jpg",
		tagline: "Havermout, klei en mos. Eén set, drie stemmingen.",
		description: "Drie mokken uit dezelfde klei, elk met een andere glazuur. Ze horen bij elkaar zonder identiek te zijn — precies hoe wij over een tafel denken.",
		details: [
			"Inhoud ± 280 ml per mok",
			"Vaatwasser- en magnetronbestendig",
			"Set van drie"
		],
		materials: "Steengoed, matte glazuren",
		madeIn: "Antwerpen",
		stock: 11,
		featured: true
	},
	{
		slug: "kandelaar-paar",
		name: "Kandelaars, paar",
		category: "keramiek",
		price: 96,
		image: "/products/kandelaar-paar.jpg",
		tagline: "Twee hoogtes, één klei.",
		description: "Een paar kandelaars, de ene een tikje hoger dan de andere. Matte klei met een zachte havermoutglazuur. Bedoeld voor dinerkaarsen van 22 mm.",
		details: [
			"Hoogtes 9 en 12 cm",
			"Voor dinerkaars 22 mm",
			"Verkocht als paar"
		],
		materials: "Steengoed, mat glazuur",
		madeIn: "Antwerpen",
		stock: 9
	},
	{
		slug: "plaid-heide",
		name: "Plaid Heide",
		category: "textiel",
		price: 189,
		image: "/products/plaid-heide.jpg",
		tagline: "Wol in een stille visgraat.",
		description: "Een wollen plaid in heidebruin, met een visgraat die je pas van dichtbij ziet. Zwaar genoeg voor een avond op de zetel, licht genoeg om over een stoel te laten hangen.",
		details: [
			"140 × 200 cm",
			"Wol 100%",
			"Dry clean of wolwas"
		],
		materials: "Merinowol, visgraatbinding",
		madeIn: "Portugal",
		stock: 7,
		featured: true
	},
	{
		slug: "kussen-linnen",
		name: "Kussen Linnen",
		category: "textiel",
		price: 72,
		image: "/products/kussen-linnen.jpg",
		tagline: "Ongebleekt vlas, zichtbare weefsel.",
		description: "Een vierkant kussen van ongebleekt linnen. De stof wordt mooier naarmate je hem meer gebruikt. Hoes met blinde rits, vulling inbegrepen.",
		details: [
			"50 × 50 cm",
			"Linnen hoes, kapokvulling",
			"Hoes wasbaar op 30°"
		],
		materials: "Europees linnen",
		madeIn: "Litouwen / België",
		stock: 16
	},
	{
		slug: "deken-merino",
		name: "Deken Merino",
		category: "textiel",
		price: 248,
		image: "/products/deken-merino.jpg",
		tagline: "Ongeverfd, dik, stil.",
		description: "Een zware merinodecken in de natuurlijke kleur van de wol. Geen verf, geen print. Alleen de stof zelf — warm, ademend, en gemaakt om jaren mee te gaan.",
		details: [
			"160 × 220 cm",
			"Merinowol 100%, ongeverfd",
			"Wolwas"
		],
		materials: "Merinowol",
		madeIn: "Portugal",
		stock: 5,
		isNew: true
	},
	{
		slug: "lamp-halo",
		name: "Lamp Halo",
		category: "verlichting",
		price: 265,
		image: "/products/lamp-halo.jpg",
		tagline: "Eiken voet, linnen kap, zacht licht.",
		description: "Een tafellamp met gedraaide eiken voet en een cilindrische linnen kap. Het licht valt warm en diffuus. Bedoeld voor een nachtkastje, een bureau, of de vensterbank.",
		details: [
			"Hoogte 48 cm",
			"E27, max. 8 W LED",
			"Textielkabel 1,8 m"
		],
		materials: "Eik, linnen, messing fitting",
		madeIn: "België",
		stock: 6,
		featured: true,
		isNew: true
	},
	{
		slug: "hanglicht-arc",
		name: "Hanglicht Arc",
		category: "verlichting",
		price: 340,
		image: "/products/hanglicht-arc.jpg",
		tagline: "Een linnen trommel aan een gebogen arm.",
		description: "Sculpturaal hanglicht: een linnen kap aan een dunne, gebogen messing arm. Hangt boven een eettafel of in een hoek, en trekt de ruimte samen zonder luid te zijn.",
		details: [
			"Kap Ø 32 cm",
			"E27, max. 8 W LED",
			"Plafondkap inbegrepen"
		],
		materials: "Messing, linnen",
		madeIn: "België",
		stock: 0
	},
	{
		slug: "kruk-eik",
		name: "Kruk Eik",
		category: "hout",
		price: 198,
		image: "/products/kruk-eik.jpg",
		tagline: "Drie poten, massief eiken, geolied.",
		description: "Een lage kruk uit Europees eiken. Drie poten zodat hij altijd stabiel staat, ook op een oneffen vloer. Geolied, niet gelakt — de nerf blijft voelbaar.",
		details: [
			"Zithoogte 45 cm, zitting Ø 32 cm",
			"Massief eiken",
			"Onderhoud met natuurlijke olie"
		],
		materials: "Europees eiken",
		madeIn: "Vlaanderen",
		stock: 4,
		featured: true
	},
	{
		slug: "serveerplank",
		name: "Serveerplank",
		category: "hout",
		price: 54,
		image: "/products/serveerplank.jpg",
		tagline: "Eén plank, een groef, jaren brood.",
		description: "Een serveerplank uit eiken, met een lichte sapgroef. Groot genoeg voor een stokbrood en een kom olijven, klein genoeg om in de lade te schuiven.",
		details: [
			"48 × 18 cm",
			"Massief eiken, geolied",
			"Niet in de vaatwasser"
		],
		materials: "Europees eiken",
		madeIn: "Vlaanderen",
		stock: 22
	},
	{
		slug: "bijzettafel-nara",
		name: "Bijzettafel Nara",
		category: "hout",
		price: 420,
		image: "/products/bijzettafel-nara.jpg",
		tagline: "Rond blad, slanke poten, stille aanwezigheid.",
		description: "Een kleine ronde bijzettafel in geolied eiken. De poten zijn gedraaid en slank, het blad is rustig. Staat naast een zetel, of alleen in een hoek.",
		details: [
			"Hoogte 50 cm, blad Ø 42 cm",
			"Massief eiken",
			"Geassembleerd geleverd"
		],
		materials: "Europees eiken",
		madeIn: "Vlaanderen",
		stock: 2,
		featured: true
	}
];
var categoryCopy = {
	keramiek: {
		title: "Keramiek",
		line: "Steengoed uit het atelier. Mat, ruw, gemaakt om vast te houden."
	},
	textiel: {
		title: "Textiel",
		line: "Wol en linnen in hun eigen kleur. Warm, stil, ongebleekt."
	},
	verlichting: {
		title: "Verlichting",
		line: "Linnen kappen, eiken voeten, licht dat de kamer verzacht."
	},
	hout: {
		title: "Hout",
		line: "Europees eiken, geolied. Objecten die een plek innemen."
	}
};
function getProduct(slug) {
	return products.find((p) => p.slug === slug);
}
function relatedProducts(slug, limit = 4) {
	const current = getProduct(slug);
	if (!current) return products.slice(0, limit);
	const same = products.filter((p) => p.slug !== slug && p.category === current.category);
	const rest = products.filter((p) => p.slug !== slug && p.category !== current.category);
	return [...same, ...rest].slice(0, limit);
}
function searchProducts(query) {
	const q = query.trim().toLowerCase();
	if (!q) return [];
	return products.filter((p) => {
		return `${p.name} ${p.tagline} ${p.category} ${p.materials}`.toLowerCase().includes(q);
	});
}
function formatMoney(amount) {
	return new Intl.NumberFormat("nl-BE", {
		style: "currency",
		currency: "EUR"
	}).format(amount);
}
var SHIPPING_COST = 8.5;
function shippingFor(subtotal) {
	if (subtotal <= 0) return 0;
	return subtotal >= 150 ? 0 : SHIPPING_COST;
}
var useCart = create()(persist((set, get) => ({
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
		if (existing) set({
			items: get().items.map((i) => i.slug === slug ? {
				...i,
				qty: nextQty
			} : i),
			drawerOpen: true
		});
		else set({
			items: [...get().items, {
				slug,
				qty: nextQty
			}],
			drawerOpen: true
		});
	},
	setQty: (slug, qty) => {
		const product = getProduct(slug);
		if (!product) return;
		if (qty <= 0) {
			set({ items: get().items.filter((i) => i.slug !== slug) });
			return;
		}
		const next = Math.min(product.stock, qty);
		set({ items: get().items.map((i) => i.slug === slug ? {
			...i,
			qty: next
		} : i) });
	},
	remove: (slug) => set({ items: get().items.filter((i) => i.slug !== slug) }),
	clear: () => set({ items: [] }),
	toggleWish: (slug) => {
		set({ wishlist: get().wishlist.includes(slug) ? get().wishlist.filter((s) => s !== slug) : [...get().wishlist, slug] });
	}
}), {
	name: "noord-cart",
	partialize: (state) => ({
		items: state.items,
		wishlist: state.wishlist
	}),
	onRehydrateStorage: () => (state) => {
		state?.setHydrated();
	}
}));
function cartCount(items) {
	return items.reduce((sum, i) => sum + i.qty, 0);
}
function cartLines(items) {
	return items.map((item) => {
		const product = getProduct(item.slug);
		if (!product) return null;
		return {
			...item,
			product,
			line: product.price * item.qty
		};
	}).filter((line) => line !== null);
}
function cartTotals(items) {
	const lines = cartLines(items);
	const subtotal = lines.reduce((sum, l) => sum + l.line, 0);
	const shipping = shippingFor(subtotal);
	return {
		lines,
		subtotal,
		shipping,
		total: subtotal + shipping
	};
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var NAV = [{
	to: "/winkel",
	label: "Collectie"
}, {
	to: "/over",
	label: "Atelier"
}];
function SiteHeader() {
	const [menu, setMenu] = (0, import_react.useState)(false);
	const items = useCart((s) => s.items);
	const wishlist = useCart((s) => s.wishlist);
	const hydrated = useCart((s) => s.hydrated);
	const setDrawerOpen = useCart((s) => s.setDrawerOpen);
	const setSearchOpen = useCart((s) => s.setSearchOpen);
	const count = hydrated ? cartCount(items) : 0;
	const wishes = hydrated ? wishlist.length : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-[4.5rem] md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "flex size-11 items-center justify-center rounded-md md:hidden",
					"aria-label": menu ? "Menu sluiten" : "Menu openen",
					onClick: () => setMenu((v) => !v),
					children: menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 md:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-sm text-ink/80 underline-offset-8 hover:text-ink hover:underline",
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "absolute left-1/2 -translate-x-1/2 font-display text-2xl tracking-tight md:text-3xl",
					children: "NOORD"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Zoeken",
							onClick: () => setSearchOpen(true),
							className: "flex size-11 items-center justify-center rounded-md hover:bg-ink/5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/verlanglijst",
							"aria-label": "Verlanglijst",
							className: "relative flex size-11 items-center justify-center rounded-md hover:bg-ink/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-5" }), wishes > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute right-1.5 top-1.5 flex size-4 items-center justify-center rounded-full bg-forest text-[10px] text-forest-fg tabular-nums",
								children: wishes
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-label": "Winkelwagen",
							onClick: () => setDrawerOpen(true),
							className: "relative flex size-11 items-center justify-center rounded-md hover:bg-ink/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5" }), count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute right-1.5 top-1.5 flex size-4 items-center justify-center rounded-full bg-forest text-[10px] text-forest-fg tabular-nums",
								children: count
							}) : null]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("border-t border-line bg-paper md:hidden", menu ? "block" : "hidden"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col px-4 py-3",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setMenu(false),
					className: "flex h-12 items-center text-base",
					children: item.label
				}, item.to))
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-auto border-t border-line bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl",
						children: "NOORD"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-sm text-sm leading-relaxed text-muted",
						children: "Objecten voor het huis, gemaakt om te blijven. Keramiek uit het atelier, wol en linnen, eiken en licht. Vanuit Antwerpen, naar jouw tafel."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-muted",
					children: "Winkel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/winkel",
							className: "hover:underline",
							children: "Collectie"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/winkel",
							search: { cat: "keramiek" },
							className: "hover:underline",
							children: "Keramiek"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/winkel",
							search: { cat: "textiel" },
							className: "hover:underline",
							children: "Textiel"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/over",
							className: "hover:underline",
							children: "Atelier"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: "Atelier"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: [
							"Dambruggestraat 12",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"2060 Antwerpen",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"hello@noord.shop"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: "Gratis verzending vanaf €150 in de Benelux."
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-subtle md:flex-row md:items-center md:justify-between md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" NOORD. Alle prijzen incl. BTW."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Gebouwd met open source: React, TanStack en Tailwind." })]
			})
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-transform duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-95 [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-forest text-forest-fg hover:bg-forest/90",
			secondary: "bg-surface text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			outline: "border border-line bg-transparent text-ink hover:bg-surface",
			ghost: "text-ink hover:bg-ink/5",
			danger: "bg-danger text-paper hover:bg-danger/90"
		},
		size: {
			sm: "h-9 rounded-md px-3 text-sm",
			md: "h-11 rounded-md px-4 text-sm",
			lg: "h-12 rounded-lg px-5 text-base",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function QtyStepper({ value, min = 1, max = 99, onChange, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("inline-flex h-11 items-center rounded-md border border-line bg-surface", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Minder",
				className: "flex size-11 items-center justify-center text-ink disabled:text-subtle",
				disabled: value <= min,
				onClick: () => onChange(Math.max(min, value - 1)),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-8 text-center text-sm tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Meer",
				className: "flex size-11 items-center justify-center text-ink disabled:text-subtle",
				disabled: value >= max,
				onClick: () => onChange(Math.min(max, value + 1)),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
			})
		]
	});
}
function CartDrawer() {
	const open = useCart((s) => s.drawerOpen);
	const setOpen = useCart((s) => s.setDrawerOpen);
	const items = useCart((s) => s.items);
	const setQty = useCart((s) => s.setQty);
	const remove = useCart((s) => s.remove);
	const { lines, subtotal, shipping, total } = cartTotals(items);
	const remaining = Math.max(0, 150 - subtotal);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("fixed inset-0 z-50", open ? "pointer-events-auto" : "pointer-events-none"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Sluit winkelwagen",
			onClick: () => setOpen(false),
			className: cn("absolute inset-0 bg-ink/40 transition-opacity duration-200", open ? "opacity-100" : "opacity-0")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Winkelwagen",
			className: cn("absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-paper shadow-[var(--shadow-border-hover)] transition-transform duration-300 ease-out", open ? "translate-x-0" : "translate-x-full"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between border-b border-line px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl",
					children: "Winkelwagen"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [cartCount(items), " stuks"]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Sluiten",
					onClick: () => setOpen(false),
					className: "flex size-11 items-center justify-center rounded-md hover:bg-ink/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col items-center justify-center px-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl",
						children: "Je wagen is leeg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xs text-sm leading-relaxed text-muted",
						children: "De collectie wacht. Keramiek, wol, eiken — objecten om te blijven."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-6",
						onClick: () => setOpen(false),
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/winkel",
							children: "Naar de collectie"
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex-1 overflow-y-auto px-5 py-4",
				children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 border-b border-line py-4 first:pt-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$slug",
						params: { slug: line.slug },
						onClick: () => setOpen(false),
						className: "shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: line.product.image,
							alt: "",
							className: "size-24 rounded-md object-cover outline outline-1 -outline-offset-1 outline-ink/10"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/product/$slug",
									params: { slug: line.slug },
									onClick: () => setOpen(false),
									className: "font-display text-lg leading-snug",
									children: line.product.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm tabular-nums",
									children: formatMoney(line.line)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs uppercase tracking-widest text-muted",
								children: formatMoney(line.product.price)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyStepper, {
									value: line.qty,
									max: line.product.stock,
									onChange: (qty) => setQty(line.slug, qty)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "text-sm text-muted underline-offset-4 hover:text-ink hover:underline",
									onClick: () => remove(line.slug),
									children: "Verwijder"
								})]
							})
						]
					})]
				}, line.slug))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line px-5 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4",
						children: [remaining > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								"Nog ",
								formatMoney(remaining),
								" tot gratis verzending."
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-forest",
							children: "Verzending is gratis."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-1 overflow-hidden rounded-full bg-line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-forest transition-[width] duration-200",
								style: { width: `${Math.min(100, subtotal / 150 * 100)}%` }
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "space-y-1.5 text-sm",
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
								className: "flex justify-between pt-1 font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Totaal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular-nums",
									children: formatMoney(total)
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-subtle",
						children: "Inclusief BTW 21%."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-4 w-full",
						size: "lg",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/afrekenen",
							onClick: () => setOpen(false),
							children: "Afrekenen"
						})
					})
				]
			})] })]
		})]
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-line bg-surface px-3 text-sm text-ink", "placeholder:text-subtle", "transition-[box-shadow,border-color] duration-150", "focus-visible:border-forest focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-forest)_22%,transparent)]", "disabled:opacity-50", className),
		...props
	});
}
function SearchDialog() {
	const open = useCart((s) => s.searchOpen);
	const setOpen = useCart((s) => s.setSearchOpen);
	const [q, setQ] = (0, import_react.useState)("");
	const results = (0, import_react.useMemo)(() => searchProducts(q), [q]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Sluit zoeken",
			className: "absolute inset-0 bg-ink/40",
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Zoeken",
			className: "absolute inset-x-4 top-8 mx-auto w-full max-w-xl rounded-xl bg-paper p-4 shadow-[var(--shadow-border-hover)] md:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5 text-muted" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						autoFocus: true,
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Zoek in de collectie…",
						className: "border-0 bg-transparent shadow-none focus-visible:shadow-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Sluiten",
						onClick: () => setOpen(false),
						className: "flex size-11 items-center justify-center rounded-md hover:bg-ink/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("mt-2 max-h-96 overflow-y-auto", q && "border-t border-line pt-2"),
				children: [q && results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "px-2 py-6 text-sm text-muted",
					children: [
						"Niets gevonden voor “",
						q,
						"”."
					]
				}) : null, results.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/product/$slug",
					params: { slug: p.slug },
					onClick: () => setOpen(false),
					className: "flex items-center gap-3 rounded-md px-2 py-2 hover:bg-ink/5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: "",
							className: "size-14 rounded-sm object-cover outline outline-1 -outline-offset-1 outline-ink/10"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm text-muted",
								children: p.tagline
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm tabular-nums",
							children: formatMoney(p.price)
						})
					]
				}, p.slug))]
			})]
		})]
	});
}
function SiteShell({ children }) {
	const setHydrated = useCart((s) => s.setHydrated);
	const hydrated = useCart((s) => s.hydrated);
	(0, import_react.useEffect)(() => {
		if (!hydrated) setHydrated();
	}, [hydrated, setHydrated]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchDialog, {})
		]
	});
}
//#endregion
export { SiteShell as a, cn as c, products as d, relatedProducts as f, QtyStepper as i, formatMoney as l, CATEGORIES as n, cartTotals as o, useCart as p, Input as r, categoryCopy as s, Button as t, getProduct as u };
