import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/payment")({ component: PaymentPage });

function PaymentPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-2xl px-4 py-16 md:px-6 md:py-24">
        <p className="text-xs font-bold uppercase tracking-widest text-teal">The Shop</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold md:text-5xl">Payment Options</h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          This is a demo checkout — nothing is charged. When we go live, these are the
          ways you can pay.
        </p>

        <ul className="mt-10 space-y-6">
          <li className="lift rounded-md bg-surface p-6">
            <p className="font-display text-xl font-bold text-teal">Bancontact</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              The usual Belgian way. Pay by card or app at checkout.
            </p>
          </li>
          <li className="lift rounded-md bg-surface p-6">
            <p className="font-display text-xl font-bold text-teal">Visa / Mastercard</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Credit and debit cards, processed securely. No extra fee.
            </p>
          </li>
          <li className="lift rounded-md bg-surface p-6">
            <p className="font-display text-xl font-bold text-teal">Bank transfer</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              For larger orders we send IBAN details by email. Ships when the payment lands.
            </p>
          </li>
        </ul>

        <p className="mt-10 text-sm leading-relaxed text-muted">
          Prices include 21% VAT. Free shipping from €75 in the Benelux.
        </p>

        <Button className="mt-8" asChild>
          <Link to="/winkel">Discover the collection</Link>
        </Button>
      </main>
    </SiteShell>
  );
}
