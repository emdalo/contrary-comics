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
            src="/images/atelier.jpg"
            alt="Het atelier van NOORD in Antwerpen"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/35" />
          <div className="relative mx-auto flex min-h-96 max-w-6xl items-end px-4 pb-12 md:min-h-svh md:px-6 md:pb-16">
            <h1 className="font-display text-5xl text-paper md:text-7xl">Het atelier</h1>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-16 md:px-6 md:py-24">
          <p className="text-xs uppercase tracking-widest text-muted">NOORD</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Objecten die blijven</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
            <p>
              NOORD begon als een werkbank in Antwerpen-Noord: een draaischijf, een rek eiken,
              en de vraag welke dingen we zelf in huis zouden willen over tien jaar.
            </p>
            <p>
              We maken weinig, en we maken het af. Steengoed met matte glazuren. Wol zonder verf.
              Eiken dat geolied wordt, niet gelakt. Licht dat een kamer verzacht in plaats van
              op te lichten.
            </p>
            <p>
              De winkel zelf is gebouwd met open source gereedschap — React, TanStack Start,
              Tailwind. Net als de objecten: helder, onderhoudbaar, en van niemand anders dan
              de mensen die eraan werken.
            </p>
          </div>
        </section>

        <section className="border-y border-line bg-surface">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-3 md:px-6">
            <div>
              <p className="font-display text-xl">Materialen</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Europese klei, merinowol, vlas uit de Lage Landen, eiken uit duurzaam beheerde
                bossen. We kiezen leveranciers die we bij naam kennen.
              </p>
            </div>
            <div>
              <p className="font-display text-xl">Verzending</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Inpakken met papier. Verzending in de Benelux in 2–5 werkdagen. Gratis vanaf
                €150. Retour binnen 14 dagen, ongebruikt.
              </p>
            </div>
            <div>
              <p className="font-display text-xl">Bezoek</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Dambruggestraat 12, 2060 Antwerpen. Open op afspraak, donderdag tot zaterdag.
                Schrijf naar hello@noord.shop.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
          <h2 className="font-display text-3xl">De collectie</h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            Twaalf stukken. Keramiek, textiel, licht en hout.
          </p>
          <Button className="mt-8" asChild>
            <Link to="/winkel">Naar de winkel</Link>
          </Button>
        </section>
      </main>
    </SiteShell>
  );
}
