import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { cartCount, useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/winkel" as const, label: "Collection" },
  { to: "/over" as const, label: "About" },
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
          aria-label={menu ? "Close menu" : "Open menu"}
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
          className="absolute left-1/2 max-w-[48%] -translate-x-1/2 truncate text-center font-display text-[15px] font-extrabold tracking-tight text-forest sm:max-w-none sm:text-lg md:text-2xl"
        >
          Contrary Comics
        </Link>

        <div className="flex items-center">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="flex size-11 items-center justify-center rounded-sm hover:bg-ink/5"
          >
            <Search className="size-5" />
          </button>
          <Link
            to="/verlanglijst"
            aria-label="Wishlist"
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
            aria-label="Cart"
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
