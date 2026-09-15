import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { products, CATEGORIES, categoryCopy } from "@/lib/products";

export const Route = createFileRoute("/")({ component: Home });

const CATEGORY_IMAGE: Record<string, string> = {
  indie: "/products/nachtveer.jpg",
  klassiekers: "/products/spiegelstad.jpg",
  exclusief: "/products/variant-nul.jpg",
  graphic: "/products/stille-donder.jpg",
};

function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <SiteShell>
      <section className="relative min-h-[78vh] overflow-hidden md:min-h-[88vh]">
        <img
          src="/images/hero.jpg"
          alt="Contrary Comics: een stripwinkel bij nacht, neon magenta en teal."
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-overlay/80 via-overlay/40 to-overlay/20" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 md:min-h-[88vh] md:px-6 md:pb-24">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">Flip the page</p>
          <h1 className="mt-3 max-w-xl font-display text-5xl font-extrabold leading-tight text-forest md:text-7xl">
            Find the unexpected
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink/90 md:text-lg">
            Indie, heruitgaven en edities die conventies omkeren. Hand-picked in Antwerpen.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link to="/winkel">
                Ontdek de collectie
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-teal">Vier rekken</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">De collectie</h2>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to="/winkel"
              search={{ cat: cat.id }}
              className="group relative overflow-hidden rounded-md"
            >
              <img
                src={CATEGORY_IMAGE[cat.id]}
                alt=""
                className="aspect-portrait w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-overlay/75 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-display text-xl font-bold text-ink md:text-2xl">{cat.label}</p>
                <p className="mt-1 hidden text-xs leading-relaxed text-ink/75 md:block">
                  {categoryCopy[cat.id].line}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6 md:pb-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-teal">Geselecteerd</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Nu in de rekken</h2>
          </div>
          <Link
            to="/winkel"
            className="hidden items-center gap-1 text-sm font-bold text-teal underline-offset-4 hover:text-forest hover:underline md:inline-flex"
          >
            Alles bekijken
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 md:gap-x-6">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <img
            src="/images/shop.jpg"
            alt="De toonbank van Contrary Comics in Antwerpen."
            className="h-full min-h-96 w-full object-cover"
          />
          <div className="flex flex-col justify-center px-6 py-12 md:px-16 md:py-20">
            <p className="text-xs font-bold uppercase tracking-widest text-teal">De shop</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Aan de andere kant van het verhaal</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Contrary Comics is de stripwinkel die floreert waar het plot omkeert.
              Van indie trailblazers tot heruitgevonden klassiekers — elke titel is
              gekozen om conventies te challengen.
            </p>
            <div className="mt-8">
              <Button variant="outline" asChild>
                <Link to="/over">
                  Over Contrary
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3 md:px-6 md:py-20">
        <div className="lift rounded-md bg-surface p-6">
          <p className="font-display text-xl font-bold text-teal">Gecureerd</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Elke strip wordt gekozen op originaliteit, diepte, en de contrary-factor.
          </p>
        </div>
        <div className="lift rounded-md bg-surface p-6">
          <p className="font-display text-xl font-bold text-teal">Exclusieve edities</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Limited runs en special covers die je nergens anders vindt.
          </p>
        </div>
        <div className="lift rounded-md bg-surface p-6">
          <p className="font-display text-xl font-bold text-teal">Community</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Reader polls, maker-Q&A’s, en een rek voor het onverwachte.
          </p>
        </div>
        </div>
      </section>
    </SiteShell>
  );
}
