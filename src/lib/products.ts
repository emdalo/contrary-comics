export const CATEGORIES = [
  { id: "indie", label: "Indie" },
  { id: "klassiekers", label: "Heruitgaven" },
  { id: "exclusief", label: "Exclusief" },
  { id: "graphic", label: "Graphic novels" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  price: number;
  image: string;
  tagline: string;
  description: string;
  details: string[];
  materials: string;
  madeIn: string;
  stock: number;
  featured?: boolean;
  isNew?: boolean;
};

export const products: Product[] = [
  {
    slug: "nachtveer",
    name: "Nachtveer",
    category: "indie",
    price: 16,
    image: "/products/nachtveer.jpg",
    tagline: "Twee stiltes op een boot die nergens aanlegt.",
    description:
      "Een korte strip over een veerboot die alleen vaart als niemand kijkt. Indie van de Antwerpse maker Lea Voss — zwart, nat, en net te laat voor de laatste overzet.",
    details: ["64 pagina’s", "Softcover, 17 × 24 cm", "Nederlandstalig"],
    materials: "Offset, mat papier",
    madeIn: "België",
    stock: 22,
    featured: true,
    isNew: true,
  },
  {
    slug: "omgekeerde-pool",
    name: "Omgekeerde pool",
    category: "indie",
    price: 18,
    image: "/products/omgekeerde-pool.jpg",
    tagline: "Zwaartekracht is een mening.",
    description:
      "In een stad waar de regen omhoog valt, zoekt een koerier een pakket dat nog niet bestaat. Getekend in natte inkt, met een plot dat achterstevoren leest.",
    details: ["80 pagina’s", "Softcover", "Silent / weinig tekst"],
    materials: "Risografie, twee kleuren",
    madeIn: "Nederland",
    stock: 14,
    featured: true,
  },
  {
    slug: "laatste-kader",
    name: "Het laatste kader",
    category: "indie",
    price: 14,
    image: "/products/laatste-kader.jpg",
    tagline: "De strip stapt uit de pagina.",
    description:
      "Een metafictie over een tekenaar die het laatste kader niet aankrijgt. De inkt loopt de straat op. Mini-album, maxi-hangover.",
    details: ["48 pagina’s", "Zadelsteek", "Nederlandstalig"],
    materials: "Krantenpapier, spot-magenta",
    madeIn: "België",
    stock: 31,
  },
  {
    slug: "spiegelstad",
    name: "Spiegelstad",
    category: "klassiekers",
    price: 22,
    image: "/products/spiegelstad.jpg",
    tagline: "De klassieker, maar de stad kijkt terug.",
    description:
      "Heruitgave van een vergeten stadsstrip uit 1978, opnieuw ingekleurd en met een extra hoofdstuk waarin de gebouwen de mensen nadoen.",
    details: ["112 pagina’s", "Hardcover", "Restored edition"],
    materials: "Hardcover, linnen rug",
    madeIn: "Frankrijk / België",
    stock: 9,
    featured: true,
  },
  {
    slug: "gouden-detective",
    name: "De gouden detective",
    category: "klassiekers",
    price: 19,
    image: "/products/gouden-detective.jpg",
    tagline: "Noir, maar het alibi is het licht.",
    description:
      "Een hertekende pulpstory: dezelfde moord, een andere dader, en een detective die alleen werkt zolang de zon ondergaat. Contrary-editie met nawoord.",
    details: ["96 pagina’s", "Softcover met flappen", "NL + FR intern"],
    materials: "Softcover, spot-UV",
    madeIn: "België",
    stock: 12,
  },
  {
    slug: "kapitein-contrary",
    name: "Kapitein Contrary",
    category: "klassiekers",
    price: 24,
    image: "/products/kapitein-contrary.jpg",
    tagline: "De held die alles omgekeerd doet.",
    description:
      "Onze huis-antiheld. Cape achterstevoren, motto in spiegelschrift. Een lieve parodie op het superheldengenre — en de enige strip die we zelf uitgeven.",
    details: ["88 pagina’s", "Softcover", "House title"],
    materials: "Glossy cover, binnenwerk mat",
    madeIn: "Antwerpen",
    stock: 18,
    featured: true,
  },
  {
    slug: "variant-nul",
    name: "Variant Nul",
    category: "exclusief",
    price: 45,
    image: "/products/variant-nul.jpg",
    tagline: "Foil-editie. 200 stuks. Nummer in de kaft.",
    description:
      "De blanco variant: een personage dat uit elkaar valt in statisch. Genummerd, met holografische folie. Alleen bij Contrary, niet herdrukt.",
    details: ["40 pagina’s", "Genummerd /200", "Foil cover"],
    materials: "Foil, heavy stock",
    madeIn: "België",
    stock: 7,
    featured: true,
    isNew: true,
  },
  {
    slug: "inktoproer",
    name: "Inktoproer #1",
    category: "exclusief",
    price: 38,
    image: "/products/inktoproer.jpg",
    tagline: "Eerste druk, eerste rel.",
    description:
      "Debuutnummer van een anthologie over protest in inkt. Zeven tekenaars, één nacht in de drukkerij. Cover in split fountain.",
    details: ["72 pagina’s", "Eerste druk", "Split-fountain cover"],
    materials: "Softcover, uncoated",
    madeIn: "Nederland",
    stock: 11,
  },
  {
    slug: "zachte-kaft",
    name: "Zachte kaft",
    category: "exclusief",
    price: 62,
    image: "/products/zachte-kaft.jpg",
    tagline: "Deluxe. Uitverkocht in de eerste week.",
    description:
      "Een gezicht, half getekend, half gescheurd. Slipcase-editie met originele riso-print. Deze oplage is rond — we zetten hem online zodat je weet wat je miste.",
    details: ["120 pagina’s", "Slipcase + print", "Uitverkocht"],
    materials: "Slipcase, katoenpapier",
    madeIn: "België",
    stock: 0,
  },
  {
    slug: "stille-donder",
    name: "Stille donder",
    category: "graphic",
    price: 28,
    image: "/products/stille-donder.jpg",
    tagline: "Een landschap dat wacht op de klap.",
    description:
      "Graphic novel zonder schurken: alleen weer, tijd, en een figuur die te klein is voor de bliksem. Langzaam lezen. Hard aankomen.",
    details: ["160 pagina’s", "Hardcover", "Nederlandstalig"],
    materials: "Hardcover, sewn binding",
    madeIn: "Zweden / België",
    stock: 8,
    featured: true,
  },
  {
    slug: "zout-static",
    name: "Zout & static",
    category: "graphic",
    price: 26,
    image: "/products/zout-static.jpg",
    tagline: "Een radio aan zee die berichten uit de toekomst speelt.",
    description:
      "Een kustwacht hoort stemmen in de ruis. Zout op de kaft, static in de balloons. Een graphic novel over wachten, water, en het verkeerde kanaal.",
    details: ["144 pagina’s", "Softcover", "Engelstalig met NL nawoord"],
    materials: "Softcover, uncoated",
    madeIn: "Ierland",
    stock: 15,
  },
  {
    slug: "papieren-tanden",
    name: "Papieren tanden",
    category: "graphic",
    price: 32,
    image: "/products/papieren-tanden.jpg",
    tagline: "Collage, bijten, niet loslaten.",
    description:
      "Een portretroman in knipkunst. Elke pagina is een mond. Beperkte voorraad — als hij op is, is de volgende druk anders.",
    details: ["128 pagina’s", "Hardcover", "Last copies"],
    materials: "Hardcover, collage reproductions",
    madeIn: "België",
    stock: 3,
  },
];

export const categoryCopy: Record<CategoryId, { title: string; line: string }> = {
  indie: {
    title: "Indie",
    line: "Trailblazers. Klein, vreemd, met de hand gezet.",
  },
  klassiekers: {
    title: "Heruitgaven",
    line: "Bekende vormen, omgekeerd verteld.",
  },
  exclusief: {
    title: "Exclusief",
    line: "Oplagen die je nergens anders vindt.",
  },
  graphic: {
    title: "Graphic novels",
    line: "Langere adem. Dikker papier. Blijft liggen.",
  },
};

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsIn(category?: CategoryId | "all") {
  if (!category || category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function relatedProducts(slug: string, limit = 4) {
  const current = getProduct(slug);
  if (!current) return products.slice(0, limit);
  const same = products.filter((p) => p.slug !== slug && p.category === current.category);
  const rest = products.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...same, ...rest].slice(0, limit);
}

export function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter((p) => {
    const hay = `${p.name} ${p.tagline} ${p.category} ${p.materials}`.toLowerCase();
    return hay.includes(q);
  });
}
