import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { ProductCard } from "@/components/product-card";
import { CATEGORIES, products, type CategoryId } from "@/lib/products";
import { cn } from "@/lib/utils";

type SortId = "featured" | "price-asc" | "price-desc" | "new";

type ShopSearch = {
  cat?: CategoryId | "all";
  sort?: SortId;
};

export const Route = createFileRoute("/winkel")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => {
    const catRaw = search.cat;
    const cats: Array<CategoryId | "all"> = ["all", "hardcover", "tpb", "issues", "graphic"];
    const cat = cats.includes(catRaw as CategoryId) ? (catRaw as CategoryId | "all") : "all";
    const sortRaw = search.sort;
    const sorts: SortId[] = ["featured", "price-asc", "price-desc", "new"];
    const sort = sorts.includes(sortRaw as SortId) ? (sortRaw as SortId) : "featured";
    return { cat, sort };
  },
  component: ShopPage,
});

function ShopPage() {
  const { cat = "all", sort = "featured" } = Route.useSearch();
  const navigate = Route.useNavigate();

  const filtered = products.filter((p) => (cat === "all" ? true : p.category === cat));
  const listed = [...filtered].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "new") return Number(b.isNew) - Number(a.isNew);
    return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
  });

  const title =
    cat === "all" ? "The Collection" : (CATEGORIES.find((c) => c.id === cat)?.label ?? "The Collection");

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-teal">Shop</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
          Twelve titles. When it’s gone, it’s gone. No reprint unless the maker says so.
        </p>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex min-w-0 flex-wrap gap-2">
            <FilterChip
              active={cat === "all"}
              onClick={() => navigate({ search: { cat: "all", sort } })}
            >
              All
            </FilterChip>
            {CATEGORIES.map((c) => (
              <FilterChip
                key={c.id}
                active={cat === c.id}
                onClick={() => navigate({ search: { cat: c.id, sort } })}
              >
                {c.label}
              </FilterChip>
            ))}
          </div>
          <label className="flex items-center gap-2 text-sm text-muted">
            Sort
            <select
              value={sort}
              onChange={(e) =>
                navigate({ search: { cat, sort: e.target.value as SortId } })
              }
              className="h-11 rounded-md border border-line bg-surface px-3 text-sm text-ink"
            >
              <option value="featured">Featured</option>
              <option value="new">New</option>
              <option value="price-asc">Price, low–high</option>
              <option value="price-desc">Price, high–low</option>
            </select>
          </label>
        </div>

        <p className="mt-6 text-sm text-muted">{listed.length} titles</p>
        <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 md:gap-x-6">
          {listed.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </main>
    </SiteShell>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-11 rounded-sm px-4 text-sm font-bold transition-colors duration-150",
        active ? "bg-forest text-forest-fg" : "bg-surface text-teal",
      )}
    >
      {children}
    </button>
  );
}
