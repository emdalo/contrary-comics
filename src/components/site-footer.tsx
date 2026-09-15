import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <p className="font-display text-3xl">NOORD</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Objecten voor het huis, gemaakt om te blijven. Keramiek uit het atelier,
            wol en linnen, eiken en licht. Vanuit Antwerpen, naar jouw tafel.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted">Winkel</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/winkel" className="hover:underline">
                Collectie
              </Link>
            </li>
            <li>
              <Link to="/winkel" search={{ cat: "keramiek" }} className="hover:underline">
                Keramiek
              </Link>
            </li>
            <li>
              <Link to="/winkel" search={{ cat: "textiel" }} className="hover:underline">
                Textiel
              </Link>
            </li>
            <li>
              <Link to="/over" className="hover:underline">
                Atelier
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted">Atelier</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Dambruggestraat 12
            <br />
            2060 Antwerpen
            <br />
            hello@noord.shop
          </p>
          <p className="mt-4 text-sm text-muted">Gratis verzending vanaf €150 in de Benelux.</p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-subtle md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} NOORD. Alle prijzen incl. BTW.</p>
          <p>Gebouwd met open source: React, TanStack en Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}
