import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/over")({ component: AboutPage });

function AboutPage() {
  return (
    <SiteShell>
      <main>
        <section className="relative min-h-96 overflow-hidden md:min-h-svh">
          <img
            src="/images/shop.jpg"
            alt="Contrary Comics in Mortsel, Belgium"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-overlay/50" />
          <div className="relative mx-auto flex min-h-96 max-w-6xl items-end px-4 pb-12 md:min-h-svh md:px-6 md:pb-16">
            <h1 className="font-display text-5xl font-extrabold text-forest md:text-7xl">About Us</h1>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-16 md:px-6 md:py-24">
          <p className="text-xs font-bold uppercase tracking-widest text-teal">Contrary Comics</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">
            The other side of the story
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
            <p>
              Contrary Comics is a private collection where every page dares to think the
              opposite way. Reserved and curated for the misfit lovers of the comic-verse.
            </p>
            <p>
              Unique collector pieces for enthusiasts who crave for Contrary Curiosities.
              Hardcovers, trade paperbacks, single issues and graphic novels — hand-picked
              in Antwerpen, Belgium.
            </p>
            <p>
              The shop itself is built with open source tools — React, TanStack Start,
              Tailwind. Same spirit as the books we sell: clear, contrary, made by the
              people who work on them.
            </p>
          </div>
        </section>

        <section className="border-y border-line bg-panel">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3 md:px-6">
            <div className="lift rounded-md bg-surface p-6">
              <p className="font-display text-xl font-bold text-teal">Selection</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Every comic is chosen for originality, depth, and the contrary factor.
              </p>
            </div>
            <div className="lift rounded-md bg-surface p-6">
              <p className="font-display text-xl font-bold text-teal">Shipping</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Packed in paper. Benelux in 2–5 working days. Free from €75.
                Returns within 14 days, unopened.
              </p>
            </div>
            <div className="lift rounded-md bg-surface p-6">
              <p className="font-display text-xl font-bold text-teal">Visit</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Guido Gezellelaan 53 bus 2, 2640 Mortsel. Thursday to Saturday, 11–18.
                emda.sell@gmail.com
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
          <h2 className="font-display text-3xl font-extrabold">The Collection</h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            Twelve titles. Hardcovers, trade paperbacks, single issues and graphic novels.
          </p>
          <Button className="mt-8" asChild>
            <Link to="/winkel">Discover the collection</Link>
          </Button>
        </section>
      </main>
    </SiteShell>
  );
}
