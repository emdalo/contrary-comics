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
    <article className="group relative">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="block"
      >
        <div className="relative overflow-hidden rounded-xl bg-line">
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
            {product.isNew && !soldOut ? <Badge className="bg-paper">Nieuw</Badge> : null}
            {soldOut ? <Badge className="bg-paper">Uitverkocht</Badge> : null}
            {!soldOut && product.stock <= 3 ? (
              <Badge className="bg-paper">Laatste stuks</Badge>
            ) : null}
          </div>
        </div>
        <div className="mt-3 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted">{label(product.category)}</p>
            <h3 className="mt-1 font-display text-lg font-medium leading-snug text-ink">
              {product.name}
            </h3>
          </div>
          <p className="shrink-0 pt-5 text-sm tabular-nums text-ink">{formatMoney(product.price)}</p>
        </div>
      </Link>
      <button
        type="button"
        aria-label={wish ? "Verwijder van verlanglijst" : "Bewaar op verlanglijst"}
        onClick={(e) => {
          e.preventDefault();
          toggleWish(product.slug);
        }}
        className="absolute right-2 top-2 flex size-11 items-center justify-center rounded-full bg-paper/90 text-ink shadow-[var(--shadow-border)]"
      >
        <Heart className={cn("size-4", wish && "fill-ink text-ink")} />
      </button>
    </article>
  );
}

function label(category: Product["category"]) {
  const map = {
    keramiek: "Keramiek",
    textiel: "Textiel",
    verlichting: "Verlichting",
    hout: "Hout",
  };
  return map[category];
}
