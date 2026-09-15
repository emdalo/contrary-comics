import { useState, type FormEvent } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cartTotals, useCart } from "@/lib/cart";
import { formatMoney } from "@/lib/format";
import { placeOrder } from "@/lib/orders";

export const Route = createFileRoute("/afrekenen")({ component: CheckoutPage });

function CheckoutPage() {
  const items = useCart((s) => s.items);
  const clear = useCart((s) => s.clear);
  const { lines, subtotal, shipping, total } = cartTotals(items);
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (lines.length === 0) return;
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const street = String(data.get("street") ?? "").trim();
    const postal = String(data.get("postal") ?? "").trim();
    const city = String(data.get("city") ?? "").trim();
    const note = String(data.get("note") ?? "").trim();
    if (!name || !email || !street || !postal || !city) {
      setError("Vul de velden met een sterretje in.");
      return;
    }
    setBusy(true);
    const order = placeOrder(items, { name, email, phone, street, postal, city }, note);
    clear();
    void navigate({ to: "/bestelling/$id", params: { id: order.id } });
  }

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
        <h1 className="font-display text-4xl md:text-5xl">Afrekenen</h1>
        {lines.length === 0 ? (
          <div className="mt-10 max-w-md">
            <p className="text-muted">Je wagen is leeg. Kies eerst iets uit de collectie.</p>
            <Button className="mt-6" asChild>
              <Link to="/winkel">Naar de collectie</Link>
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-10 grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <h2 className="font-display text-2xl">Levering</h2>
              <p className="mt-1 text-sm text-muted">
                Dit is een demo-winkel. Er wordt niets echt verzonden of afgerekend.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Naam *" name="name" autoComplete="name" className="sm:col-span-2" />
                <Field label="E-mail *" name="email" type="email" autoComplete="email" />
                <Field label="Telefoon" name="phone" type="tel" autoComplete="tel" />
                <Field
                  label="Straat en nummer *"
                  name="street"
                  autoComplete="street-address"
                  className="sm:col-span-2"
                />
                <Field label="Postcode *" name="postal" autoComplete="postal-code" />
                <Field label="Gemeente *" name="city" autoComplete="address-level2" />
                <div className="sm:col-span-2">
                  <Label htmlFor="note">Opmerking</Label>
                  <Textarea id="note" name="note" className="mt-1.5" rows={3} />
                </div>
              </div>
              {error ? <p className="mt-4 text-sm text-danger">{error}</p> : null}
            </div>

            <aside className="rounded-md bg-surface p-5 shadow-[var(--shadow-border)] md:col-span-2 md:self-start">
              <h2 className="font-display text-2xl">Overzicht</h2>
              <ul className="mt-4 divide-y divide-line">
                {lines.map((line) => (
                  <li key={line.slug} className="flex items-center gap-3 py-3">
                    <img
                      src={line.product.image}
                      alt=""
                      className="size-14 rounded-sm object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{line.product.name}</p>
                      <p className="text-xs text-muted tabular-nums">× {line.qty}</p>
                    </div>
                    <p className="text-sm tabular-nums">{formatMoney(line.line)}</p>
                  </li>
                ))}
              </ul>
              <dl className="mt-4 space-y-1.5 text-sm">
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
                <div className="flex justify-between pt-2 text-base font-medium">
                  <dt>Totaal</dt>
                  <dd className="tabular-nums">{formatMoney(total)}</dd>
                </div>
              </dl>
              <p className="mt-2 text-xs text-subtle">Inclusief BTW 21%. Betaling bij levering — demo.</p>
              <Button type="submit" size="lg" className="mt-5 w-full" disabled={busy}>
                Bestelling plaatsen
              </Button>
            </aside>
          </form>
        )}
      </main>
    </SiteShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} autoComplete={autoComplete} className="mt-1.5" />
    </div>
  );
}
