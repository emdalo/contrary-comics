import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { cartCount, cartTotals, useCart } from "@/lib/cart";
import { formatMoney, FREE_SHIPPING_FROM } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { QtyStepper } from "@/components/qty-stepper";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const open = useCart((s) => s.drawerOpen);
  const setOpen = useCart((s) => s.setDrawerOpen);
  const items = useCart((s) => s.items);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const { lines, subtotal, shipping, total } = cartTotals(items);
  const remaining = Math.max(0, FREE_SHIPPING_FROM - subtotal);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <button
        type="button"
        aria-label="Sluit winkelwagen"
        onClick={() => setOpen(false)}
        className={cn(
          "absolute inset-0 bg-overlay/70 transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Winkelwagen"
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-paper shadow-[var(--shadow-border-hover)] transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <header className="flex items-center justify-between border-b border-line px-5 py-4">
          <div>
            <p className="font-display text-xl font-bold text-forest">Winkelwagen</p>
            <p className="text-sm text-muted">{cartCount(items)} stuks</p>
          </div>
          <button
            type="button"
            aria-label="Sluiten"
            onClick={() => setOpen(false)}
            className="flex size-11 items-center justify-center rounded-sm hover:bg-ink/5"
          >
            <X className="size-5" />
          </button>
        </header>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <p className="font-display text-2xl font-bold text-forest">Je wagen is leeg</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
              De collectie wacht. Keramiek, wol, eiken — objecten om te blijven.
            </p>
            <Button className="mt-6" onClick={() => setOpen(false)} asChild>
              <Link to="/winkel">Naar de collectie</Link>
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-5 py-4">
              {lines.map((line) => (
                <li key={line.slug} className="flex gap-4 border-b border-line py-4 first:pt-0">
                  <Link
                    to="/product/$slug"
                    params={{ slug: line.slug }}
                    onClick={() => setOpen(false)}
                    className="shrink-0"
                  >
                    <img
                      src={line.product.image}
                      alt=""
                      className="size-24 rounded-md object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                    />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to="/product/$slug"
                        params={{ slug: line.slug }}
                        onClick={() => setOpen(false)}
                        className="font-display text-lg font-bold leading-snug text-teal"
                      >
                        {line.product.name}
                      </Link>
                      <p className="text-sm tabular-nums">{formatMoney(line.line)}</p>
                    </div>
                    <p className="mt-1 text-xs uppercase tracking-widest text-muted">
                      {formatMoney(line.product.price)}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <QtyStepper
                        value={line.qty}
                        max={line.product.stock}
                        onChange={(qty) => setQty(line.slug, qty)}
                      />
                      <button
                        type="button"
                        className="text-sm text-muted underline-offset-4 hover:text-forest hover:underline"
                        onClick={() => remove(line.slug)}
                      >
                        Verwijder
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <footer className="border-t border-line px-5 py-4">
              <div className="mb-4">
                {remaining > 0 ? (
                  <p className="text-sm text-muted">
                    Nog {formatMoney(remaining)} tot gratis verzending.
                  </p>
                ) : (
                  <p className="text-sm font-bold text-teal">Verzending is gratis.</p>
                )}
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-line">
                  <div
                    className="h-full bg-forest transition-[width] duration-200"
                    style={{
                      width: `${Math.min(100, (subtotal / FREE_SHIPPING_FROM) * 100)}%`,
                    }}
                  />
                </div>
              </div>
              <dl className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted">Subtotaal</dt>
                  <dd className="tabular-nums">{formatMoney(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Verzending</dt>
                  <dd className="tabular-nums">
                    {shipping === 0 ? "Gratis" : formatMoney(shipping)}
                  </dd>
                </div>
                <div className="flex justify-between pt-1 font-medium">
                  <dt>Totaal</dt>
                  <dd className="tabular-nums">{formatMoney(total)}</dd>
                </div>
              </dl>
              <p className="mt-2 text-xs text-subtle">Inclusief BTW 21%.</p>
              <Button className="mt-4 w-full" size="lg" asChild>
                <Link to="/afrekenen" onClick={() => setOpen(false)}>
                  Afrekenen
                </Link>
              </Button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
