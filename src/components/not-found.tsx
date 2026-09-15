import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl">Pagina niet gevonden</h1>
        <p className="mt-3 text-muted">Die pagina bestaat niet in de winkel.</p>
        <Button className="mt-8" asChild>
          <Link to="/">Naar huis</Link>
        </Button>
      </main>
    </SiteShell>
  );
}
