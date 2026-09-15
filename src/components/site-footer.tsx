import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <p className="flex items-center gap-3 font-display text-xl font-extrabold text-forest md:text-2xl">
            <img
              src="/logo.png"
              alt=""
              className="size-12 shrink-0 mix-blend-screen md:size-14"
            />
            Contrary Comics
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Unique collector pieces for enthusiasts who crave for Contrary Curiosities.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-teal">Explore</p>
          <ul className="mt-3 space-y-2 text-sm font-bold">
            <li>
              <Link to="/winkel" className="text-teal hover:text-forest">
                The Collection
              </Link>
            </li>
            <li>
              <Link to="/winkel" className="text-teal hover:text-forest">
                Shopping
              </Link>
            </li>
            <li>
              <Link to="/payment" className="text-teal hover:text-forest">
                Payment Options
              </Link>
            </li>
            <li>
              <Link to="/over" className="text-teal hover:text-forest">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-teal">The Shop</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Guido Gezellelaan 53 bus 2
            <br />
            2640 Mortsel
            <br />
            <a href="mailto:emda.sell@gmail.com" className="text-teal hover:text-forest">
              emda.sell@gmail.com
            </a>
          </p>
          <p className="mt-4 text-sm text-muted">Free shipping from €75 in the Benelux.</p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-subtle md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} Contrary Comics. All prices include VAT.</p>
          <p>Built with open source: React, TanStack and Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}
