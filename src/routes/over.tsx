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
            alt="Contrary Comics in Antwerpen"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-overlay/50" />
          <div className="relative mx-auto flex min-h-96 max-w-6xl items-end px-4 pb-12 md:min-h-svh md:px-6 md:pb-16">
            <h1 className="font-display text-5xl font-extrabold text-forest md:text-7xl">Over ons</h1>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-16 md:px-6 md:py-24">
          <p className="text-xs font-bold uppercase tracking-widest text-teal">Contrary Comics</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">
            Flip the page, find the unexpected
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
            <p>
              Wij zijn de stripwinkel die floreert aan de andere kant van het verhaal.
              Van indie trailblazers tot heruitgevonden klassiekers — elke titel is
              met de hand gekozen om conventies te challengen en verbeelding aan te steken.
            </p>
            <p>
              De shop zit aan de Dambruggestraat in Antwerpen. Rekken vol first prints,
              foil variants, en graphic novels die je niet in de keten vindt. Als iets op
              is, is het op.
            </p>
            <p>
              De winkel zelf is gebouwd met open source gereedschap — React, TanStack Start,
              Tailwind. Net als de strips die we verkopen: helder, eigenwijs, van niemand
              anders dan de mensen die eraan werken.
            </p>
          </div>
        </section>

        <section className="border-y border-line bg-panel">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3 md:px-6">
            <div className="lift rounded-md bg-surface p-6">
              <p className="font-display text-xl font-bold text-teal">Selectie</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Elke comic wordt gekeurd op originaliteit, diepte, en de contrary-factor.
              </p>
            </div>
            <div className="lift rounded-md bg-surface p-6">
              <p className="font-display text-xl font-bold text-teal">Verzending</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Inpakken met papier. Benelux in 2–5 werkdagen. Gratis vanaf €75.
                Retour binnen 14 dagen, ongeopend.
              </p>
            </div>
            <div className="lift rounded-md bg-surface p-6">
              <p className="font-display text-xl font-bold text-teal">Bezoek</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Dambruggestraat 12, 2060 Antwerpen. Open donderdag tot zaterdag,
                11–18u. hello@contrary.comics
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
          <h2 className="font-display text-3xl font-extrabold">De collectie</h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            Twaalf titels. Indie, heruitgaven, exclusives en graphic novels.
          </p>
          <Button className="mt-8" asChild>
            <Link to="/winkel">Naar de winkel</Link>
          </Button>
        </section>
      </main>
    </SiteShell>
  );
}
