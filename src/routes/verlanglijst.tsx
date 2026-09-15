import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { getProduct } from "@/lib/products";

export const Route = createFileRoute("/verlanglijst")({
  component: WishlistPage,
});

function WishlistPage() {
  const wishlist = useCart((s) => s.wishlist);
  const hydrated = useCart((s) => s.hydrated);
  const items = hydrated
    ? wishlist.map((slug) => getProduct(slug)).filter((p) => p !== undefined)
    : [];

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
        <p className="text-xs uppercase tracking-widest text-muted">Bewaard</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Verlanglijst</h1>
        {!hydrated ? null : items.length === 0 ? (
          <div className="mt-10 max-w-md">
            <p className="text-muted">
              Nog niets bewaard. Tik op het hart bij een object om het hier te houden.
            </p>
            <Button className="mt-6" asChild>
              <Link to="/winkel">Naar de collectie</Link>
            </Button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 md:gap-x-6">
            {items.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </main>
    </SiteShell>
  );
}
