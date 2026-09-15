import { useEffect, type ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CartDrawer } from "@/components/cart-drawer";
import { SearchDialog } from "@/components/search-dialog";
import { useCart } from "@/lib/cart";

export function SiteShell({ children }: { children: ReactNode }) {
  const setHydrated = useCart((s) => s.setHydrated);
  const hydrated = useCart((s) => s.hydrated);

  useEffect(() => {
    if (!hydrated) setHydrated();
  }, [hydrated, setHydrated]);

  return (
    <div className="flex min-h-dvh flex-col bg-paper text-ink">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
      <CartDrawer />
      <SearchDialog />
    </div>
  );
}
