import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatMoney } from "@/lib/format";
import { useCart } from "@/lib/cart";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const wish = useCart((s) => s.wishlist.includes(product.slug));
  const toggleWish = useCart((s) => s.toggleWish);
  const soldOut = product.stock <= 0;

  return (
    <article className="group relative lift min-w-0 overflow-hidden rounded-md bg-surface p-3">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="block min-w-0"
      >
        <div className="relative overflow-hidden rounded-md bg-line">
          <img
            src={product.image}
            alt={product.name}
            className={cn(
              "aspect-portrait w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 transition-transform duration-500 ease-out",
              "group-hover:scale-105",
              soldOut && "opacity-70",
            )}
          />
          <div className="absolute left-3 top-3 flex gap-1.5">
            {product.isNew && !soldOut ? <Badge className="bg-teal text-teal-fg">Nieuw</Badge> : null}
            {soldOut ? <Badge className="bg-paper text-ink">Uitverkocht</Badge> : null}
            {!soldOut && product.stock <= 3 ? (
              <Badge className="bg-forest text-forest-fg">Laatste stuks</Badge>
            ) : null}
          </div>
        </div>
        <div className="mt-3 flex min-w-0 items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-widest text-teal">{label(product.category)}</p>
            <h3 className="mt-1 font-display text-lg font-bold leading-snug break-words text-teal">
              {product.name}
            </h3>
          </div>
          <p className="shrink-0 pt-5 text-sm font-bold tabular-nums text-ink">{formatMoney(product.price)}</p>
        </div>
      </Link>
      <button
        type="button"
        aria-label={wish ? "Verwijder van verlanglijst" : "Bewaar op verlanglijst"}
        onClick={(e) => {
          e.preventDefault();
          toggleWish(product.slug);
        }}
        className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full bg-paper/90 text-ink shadow-[var(--shadow-border)]"
      >
        <Heart className={cn("size-4", wish && "fill-forest text-forest")} />
      </button>
    </article>
  );
}

function label(category: Product["category"]) {
  const map = {
    indie: "Indie",
    klassiekers: "Heruitgaven",
    exclusief: "Exclusief",
    graphic: "Graphic novel",
  };
  return map[category];
}
