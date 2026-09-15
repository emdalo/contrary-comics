import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl">Page not found</h1>
        <p className="mt-3 text-muted">That page isn’t in this shop. Maybe a wrong panel.</p>
        <Button className="mt-8" asChild>
          <Link to="/">Back home</Link>
        </Button>
      </main>
    </SiteShell>
  );
}
