import { Link } from "@tanstack/react-router";
import { LogoMark } from "@/components/logo-mark";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <p className="flex items-center gap-2 font-display text-2xl font-extrabold text-forest md:text-3xl">
            <LogoMark className="size-10" />
            CONTRARY
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Flip the page, find the unexpected. Indie trailblazers, heruitgaven
            en exclusieve edities. Hand-picked in Antwerpen.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-teal">Winkel</p>
          <ul className="mt-3 space-y-2 text-sm font-bold">
            <li>
              <Link to="/winkel" className="text-teal hover:text-forest">
                Collectie
              </Link>
            </li>
            <li>
              <Link to="/winkel" search={{ cat: "indie" }} className="text-teal hover:text-forest">
                Indie
              </Link>
            </li>
            <li>
              <Link to="/winkel" search={{ cat: "exclusief" }} className="text-teal hover:text-forest">
                Exclusief
              </Link>
            </li>
            <li>
              <Link to="/over" className="text-teal hover:text-forest">
                Over ons
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-teal">Shop</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Dambruggestraat 12
            <br />
            2060 Antwerpen
            <br />
            hello@contrary.comics
          </p>
          <p className="mt-4 text-sm text-muted">Gratis verzending vanaf €75 in de Benelux.</p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-subtle md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} Contrary Comics. Alle prijzen incl. BTW.</p>
          <p>Gebouwd met open source: React, TanStack en Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}
