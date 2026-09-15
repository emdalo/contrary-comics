import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import { SiteShell } from "@/components/site-shell";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { QtyStepper } from "@/components/qty-stepper";
import { NotFound } from "@/components/not-found";
import { getProduct, relatedProducts, CATEGORIES } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { formatMoney } from "@/lib/format";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/product/$slug")({
  component: ProductPage,
  notFoundComponent: NotFound,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);
  if (!product) {
    return <NotFound />;
  }

  return <ProductDetail product={product} />;
}

function ProductDetail({ product }: { product: NonNullable<ReturnType<typeof getProduct>> }) {
  const [qty, setQty] = useState(1);
  const add = useCart((s) => s.add);
  const wish = useCart((s) => s.wishlist.includes(product.slug));
  const toggleWish = useCart((s) => s.toggleWish);
  const soldOut = product.stock <= 0;
  const category = CATEGORIES.find((c) => c.id === product.category);
  const related = relatedProducts(product.slug);

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-14">
        <nav className="text-sm text-muted">
          <Link to="/winkel" className="hover:text-ink hover:underline">
            Collectie
          </Link>
          <span className="px-2">/</span>
          <Link
            to="/winkel"
            search={{ cat: product.category }}
            className="hover:text-ink hover:underline"
          >
            {category?.label}
          </Link>
        </nav>

        <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="overflow-hidden rounded-xl bg-line">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-portrait w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
            />
          </div>
          <div className="md:sticky md:top-24 md:self-start">
            <p className="text-xs uppercase tracking-widest text-muted">{category?.label}</p>
            <h1 className="mt-2 font-display text-4xl md:text-5xl">{product.name}</h1>
            <p className="mt-3 text-xl tabular-nums">{formatMoney(product.price)}</p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">{product.description}</p>

            <ul className="mt-6 space-y-1.5 text-sm text-ink">
              {product.details.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-forest" />
                  {d}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-muted">
              {product.materials} · {product.madeIn}
            </p>

            {soldOut ? (
              <p className="mt-8 text-sm font-medium">Uitverkocht. Deze oplage is rond.</p>
            ) : (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <QtyStepper value={qty} max={product.stock} onChange={setQty} />
                <Button
                  size="lg"
                  className="flex-1"
                  onClick={() => {
                    add(product.slug, qty);
                    toast.success(`${product.name} zit in je wagen`);
                  }}
                >
                  In winkelwagen
                </Button>
              </div>
            )}

            <button
              type="button"
              onClick={() => toggleWish(product.slug)}
              className="mt-4 inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-ink"
            >
              <Heart className={cn("size-4", wish && "fill-ink text-ink")} />
              {wish ? "Op je verlanglijst" : "Bewaar op verlanglijst"}
            </button>

            {product.stock > 0 && product.stock <= 3 ? (
              <p className="mt-4 text-sm text-danger">Nog {product.stock} stuks.</p>
            ) : null}
          </div>
        </div>

        <section className="mt-20">
          <h2 className="font-display text-3xl">Ook in huis</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
