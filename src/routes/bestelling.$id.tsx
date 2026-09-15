import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { getOrder, type Order } from "@/lib/orders";
import { formatMoney } from "@/lib/format";

export const Route = createFileRoute("/bestelling/$id")({
  component: OrderPage,
});

function OrderPage() {
  const { id } = Route.useParams();
  const [order, setOrder] = useState<Order | null | undefined>(undefined);

  useEffect(() => {
    setOrder(getOrder(id) ?? null);
  }, [id]);

  return (
    <SiteShell>
      <main className="mx-auto max-w-2xl px-4 py-16 md:py-24">
        {order === undefined ? null : order === null ? (
          <>
            <h1 className="font-display text-4xl">Bestelling niet gevonden</h1>
            <p className="mt-3 text-muted">
              Deze demo bewaart bestellingen alleen in deze browser.
            </p>
            <Button className="mt-8" asChild>
              <Link to="/winkel">Naar de collectie</Link>
            </Button>
          </>
        ) : (
          <>
            <p className="text-xs font-bold uppercase tracking-widest text-teal">Bevestiging</p>
            <h1 className="mt-2 font-display text-4xl md:text-5xl">Dank je, {firstName(order.customer.name)}</h1>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Bestelling <span className="font-medium text-ink">{order.id}</span> is geplaatst.
              Dit is een demo — er wordt niets verzonden of afgerekend. De samenvatting
              blijft bewaard in deze browser.
            </p>

            <div className="mt-10 rounded-md bg-surface p-5 shadow-[var(--shadow-border)]">
              <p className="text-xs font-bold uppercase tracking-widest text-teal">Leveren aan</p>
              <p className="mt-2 text-sm leading-relaxed">
                {order.customer.name}
                <br />
                {order.customer.street}
                <br />
                {order.customer.postal} {order.customer.city}
              </p>
              <ul className="mt-6 divide-y divide-line border-t border-line">
                {order.lines.map((line) => (
                  <li key={line.slug} className="flex items-center gap-3 py-3">
                    <img
                      src={line.image}
                      alt=""
                      className="size-14 rounded-sm object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{line.name}</p>
                      <p className="text-xs text-muted tabular-nums">× {line.qty}</p>
                    </div>
                    <p className="text-sm tabular-nums">{formatMoney(line.price * line.qty)}</p>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between pt-3 text-base font-medium">
                <span>Totaal</span>
                <span className="tabular-nums">{formatMoney(order.total)}</span>
              </div>
            </div>

            <Button className="mt-10" asChild>
              <Link to="/winkel">Verder winkelen</Link>
            </Button>
          </>
        )}
      </main>
    </SiteShell>
  );
}

function firstName(name: string) {
  return name.split(" ")[0] ?? name;
}
