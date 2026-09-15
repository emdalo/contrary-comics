import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { searchProducts } from "@/lib/products";
import { formatMoney } from "@/lib/format";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function SearchDialog() {
  const open = useCart((s) => s.searchOpen);
  const setOpen = useCart((s) => s.setSearchOpen);
  const [q, setQ] = useState("");
  const results = useMemo(() => searchProducts(q), [q]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Sluit zoeken"
        className="absolute inset-0 bg-overlay/70"
        onClick={() => setOpen(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Zoeken"
        className="absolute inset-x-4 top-8 mx-auto w-full max-w-xl rounded-md bg-surface p-4 shadow-[var(--shadow-border-hover)] md:p-5"
      >
        <div className="flex items-center gap-2">
          <Search className="size-5 text-muted" />
          <Input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Zoek een titel…"
            className="border-0 bg-transparent shadow-none focus-visible:shadow-none"
          />
          <button
            type="button"
            aria-label="Sluiten"
            onClick={() => setOpen(false)}
            className="flex size-11 items-center justify-center rounded-sm hover:bg-ink/5"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className={cn("mt-2 max-h-96 overflow-y-auto", q && "border-t border-line pt-2")}>
          {q && results.length === 0 ? (
            <p className="px-2 py-6 text-sm text-muted">Niets gevonden voor “{q}”.</p>
          ) : null}
          {results.map((p) => (
            <Link
              key={p.slug}
              to="/product/$slug"
              params={{ slug: p.slug }}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-sm px-2 py-2 hover:bg-ink/5"
            >
              <img
                src={p.image}
                alt=""
                className="size-14 rounded-sm object-cover outline outline-1 -outline-offset-1 outline-ink/10"
              />
              <div className="min-w-0 flex-1">
                <p className="font-medium">{p.name}</p>
                <p className="truncate text-sm text-muted">{p.tagline}</p>
              </div>
              <p className="text-sm tabular-nums">{formatMoney(p.price)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
