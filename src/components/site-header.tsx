import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { cartCount, useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/winkel" as const, label: "Collectie" },
  { to: "/over" as const, label: "Atelier" },
];

export function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const items = useCart((s) => s.items);
  const wishlist = useCart((s) => s.wishlist);
  const hydrated = useCart((s) => s.hydrated);
  const setDrawerOpen = useCart((s) => s.setDrawerOpen);
  const setSearchOpen = useCart((s) => s.setSearchOpen);
  const count = hydrated ? cartCount(items) : 0;
  const wishes = hydrated ? wishlist.length : 0;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-[4.5rem] md:px-6">
        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-sm md:hidden"
          aria-label={menu ? "Menu sluiten" : "Menu openen"}
          onClick={() => setMenu((v) => !v)}
        >
          {menu ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-bold text-teal underline-offset-8 hover:text-forest hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 font-display text-2xl font-extrabold tracking-tight text-forest md:text-3xl"
        >
          NOORD
        </Link>

        <div className="flex items-center">
          <button
            type="button"
            aria-label="Zoeken"
            onClick={() => setSearchOpen(true)}
            className="flex size-11 items-center justify-center rounded-sm hover:bg-ink/5"
          >
            <Search className="size-5" />
          </button>
          <Link
            to="/verlanglijst"
            aria-label="Verlanglijst"
            className="relative flex size-11 items-center justify-center rounded-sm hover:bg-ink/5"
          >
            <Heart className="size-5" />
            {wishes > 0 ? (
              <span className="absolute right-1.5 top-1.5 flex size-4 items-center justify-center rounded-full bg-forest text-[10px] font-bold text-forest-fg tabular-nums">
                {wishes}
              </span>
            ) : null}
          </Link>
          <button
            type="button"
            aria-label="Winkelwagen"
            onClick={() => setDrawerOpen(true)}
            className="relative flex size-11 items-center justify-center rounded-sm hover:bg-ink/5"
          >
            <ShoppingBag className="size-5" />
            {count > 0 ? (
              <span className="absolute right-1.5 top-1.5 flex size-4 items-center justify-center rounded-full bg-teal text-[10px] font-bold text-teal-fg tabular-nums">
                {count}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-line bg-paper md:hidden",
          menu ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col px-4 py-3">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenu(false)}
              className="flex h-12 items-center text-base font-bold text-teal"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
