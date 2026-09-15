export const CATEGORIES = [
  { id: "keramiek", label: "Keramiek" },
  { id: "textiel", label: "Textiel" },
  { id: "verlichting", label: "Verlichting" },
  { id: "hout", label: "Hout" },
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
    slug: "kom-linde",
    name: "Kom Linde",
    category: "keramiek",
    price: 68,
    image: "/products/kom-linde.jpg",
    tagline: "Wijd, mat, gemaakt om elke dag te gebruiken.",
    description:
      "Een stenen kom met een matte havermoutglazuur en een donkerder kleirand. Gedraaid in kleine oplagen in ons atelier. De vorm is wijd en laag — voor soep, granen, of gewoon op tafel als stil object.",
    details: ["Ø 18 cm, hoogte 7 cm", "Vaatwasserbestendig", "Elk stuk is uniek"],
    materials: "Steengoed, mat glazuur",
    madeIn: "Antwerpen",
    stock: 14,
    featured: true,
    isNew: true,
  },
  {
    slug: "vaas-schelde",
    name: "Vaas Schelde",
    category: "keramiek",
    price: 124,
    image: "/products/vaas-schelde.jpg",
    tagline: "Ruwe klei, een druipende glazuur aan de hals.",
    description:
      "Een hoge vaas waarvan de buik onbehandeld blijft. Alleen de hals krijgt een havermoutglazuur dat langzaam naar beneden trekt. Sterk genoeg voor takken, mooi genoeg om leeg te laten.",
    details: ["Hoogte 32 cm, Ø 12 cm", "Waterdicht", "Handgedraaid"],
    materials: "Steengoed, rauwe klei en glazuur",
    madeIn: "Antwerpen",
    stock: 8,
    featured: true,
  },
  {
    slug: "mokken-drie",
    name: "Set van drie mokken",
    category: "keramiek",
    price: 86,
    image: "/products/mokken-drie.jpg",
    tagline: "Havermout, klei en mos. Eén set, drie stemmingen.",
    description:
      "Drie mokken uit dezelfde klei, elk met een andere glazuur. Ze horen bij elkaar zonder identiek te zijn — precies hoe wij over een tafel denken.",
    details: ["Inhoud ± 280 ml per mok", "Vaatwasser- en magnetronbestendig", "Set van drie"],
    materials: "Steengoed, matte glazuren",
    madeIn: "Antwerpen",
    stock: 11,
    featured: true,
  },
  {
    slug: "kandelaar-paar",
    name: "Kandelaars, paar",
    category: "keramiek",
    price: 96,
    image: "/products/kandelaar-paar.jpg",
    tagline: "Twee hoogtes, één klei.",
    description:
      "Een paar kandelaars, de ene een tikje hoger dan de andere. Matte klei met een zachte havermoutglazuur. Bedoeld voor dinerkaarsen van 22 mm.",
    details: ["Hoogtes 9 en 12 cm", "Voor dinerkaars 22 mm", "Verkocht als paar"],
    materials: "Steengoed, mat glazuur",
    madeIn: "Antwerpen",
    stock: 9,
  },
  {
    slug: "plaid-heide",
    name: "Plaid Heide",
    category: "textiel",
    price: 189,
    image: "/products/plaid-heide.jpg",
    tagline: "Wol in een stille visgraat.",
    description:
      "Een wollen plaid in heidebruin, met een visgraat die je pas van dichtbij ziet. Zwaar genoeg voor een avond op de zetel, licht genoeg om over een stoel te laten hangen.",
    details: ["140 × 200 cm", "Wol 100%", "Dry clean of wolwas"],
    materials: "Merinowol, visgraatbinding",
    madeIn: "Portugal",
    stock: 7,
    featured: true,
  },
  {
    slug: "kussen-linnen",
    name: "Kussen Linnen",
    category: "textiel",
    price: 72,
    image: "/products/kussen-linnen.jpg",
    tagline: "Ongebleekt vlas, zichtbare weefsel.",
    description:
      "Een vierkant kussen van ongebleekt linnen. De stof wordt mooier naarmate je hem meer gebruikt. Hoes met blinde rits, vulling inbegrepen.",
    details: ["50 × 50 cm", "Linnen hoes, kapokvulling", "Hoes wasbaar op 30°"],
    materials: "Europees linnen",
    madeIn: "Litouwen / België",
    stock: 16,
  },
  {
    slug: "deken-merino",
    name: "Deken Merino",
    category: "textiel",
    price: 248,
    image: "/products/deken-merino.jpg",
    tagline: "Ongeverfd, dik, stil.",
    description:
      "Een zware merinodecken in de natuurlijke kleur van de wol. Geen verf, geen print. Alleen de stof zelf — warm, ademend, en gemaakt om jaren mee te gaan.",
    details: ["160 × 220 cm", "Merinowol 100%, ongeverfd", "Wolwas"],
    materials: "Merinowol",
    madeIn: "Portugal",
    stock: 5,
    isNew: true,
  },
  {
    slug: "lamp-halo",
    name: "Lamp Halo",
    category: "verlichting",
    price: 265,
    image: "/products/lamp-halo.jpg",
    tagline: "Eiken voet, linnen kap, zacht licht.",
    description:
      "Een tafellamp met gedraaide eiken voet en een cilindrische linnen kap. Het licht valt warm en diffuus. Bedoeld voor een nachtkastje, een bureau, of de vensterbank.",
    details: ["Hoogte 48 cm", "E27, max. 8 W LED", "Textielkabel 1,8 m"],
    materials: "Eik, linnen, messing fitting",
    madeIn: "België",
    stock: 6,
    featured: true,
    isNew: true,
  },
  {
    slug: "hanglicht-arc",
    name: "Hanglicht Arc",
    category: "verlichting",
    price: 340,
    image: "/products/hanglicht-arc.jpg",
    tagline: "Een linnen trommel aan een gebogen arm.",
    description:
      "Sculpturaal hanglicht: een linnen kap aan een dunne, gebogen messing arm. Hangt boven een eettafel of in een hoek, en trekt de ruimte samen zonder luid te zijn.",
    details: ["Kap Ø 32 cm", "E27, max. 8 W LED", "Plafondkap inbegrepen"],
    materials: "Messing, linnen",
    madeIn: "België",
    stock: 0,
  },
  {
    slug: "kruk-eik",
    name: "Kruk Eik",
    category: "hout",
    price: 198,
    image: "/products/kruk-eik.jpg",
    tagline: "Drie poten, massief eiken, geolied.",
    description:
      "Een lage kruk uit Europees eiken. Drie poten zodat hij altijd stabiel staat, ook op een oneffen vloer. Geolied, niet gelakt — de nerf blijft voelbaar.",
    details: ["Zithoogte 45 cm, zitting Ø 32 cm", "Massief eiken", "Onderhoud met natuurlijke olie"],
    materials: "Europees eiken",
    madeIn: "Vlaanderen",
    stock: 4,
    featured: true,
  },
  {
    slug: "serveerplank",
    name: "Serveerplank",
    category: "hout",
    price: 54,
    image: "/products/serveerplank.jpg",
    tagline: "Eén plank, een groef, jaren brood.",
    description:
      "Een serveerplank uit eiken, met een lichte sapgroef. Groot genoeg voor een stokbrood en een kom olijven, klein genoeg om in de lade te schuiven.",
    details: ["48 × 18 cm", "Massief eiken, geolied", "Niet in de vaatwasser"],
    materials: "Europees eiken",
    madeIn: "Vlaanderen",
    stock: 22,
  },
  {
    slug: "bijzettafel-nara",
    name: "Bijzettafel Nara",
    category: "hout",
    price: 420,
    image: "/products/bijzettafel-nara.jpg",
    tagline: "Rond blad, slanke poten, stille aanwezigheid.",
    description:
      "Een kleine ronde bijzettafel in geolied eiken. De poten zijn gedraaid en slank, het blad is rustig. Staat naast een zetel, of alleen in een hoek.",
    details: ["Hoogte 50 cm, blad Ø 42 cm", "Massief eiken", "Geassembleerd geleverd"],
    materials: "Europees eiken",
    madeIn: "Vlaanderen",
    stock: 2,
    featured: true,
  },
];

export const categoryCopy: Record<CategoryId, { title: string; line: string }> = {
  keramiek: {
    title: "Keramiek",
    line: "Steengoed uit het atelier. Mat, ruw, gemaakt om vast te houden.",
  },
  textiel: {
    title: "Textiel",
    line: "Wol en linnen in hun eigen kleur. Warm, stil, ongebleekt.",
  },
  verlichting: {
    title: "Verlichting",
    line: "Linnen kappen, eiken voeten, licht dat de kamer verzacht.",
  },
  hout: {
    title: "Hout",
    line: "Europees eiken, geolied. Objecten die een plek innemen.",
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
