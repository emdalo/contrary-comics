import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-24 w-full rounded-md border border-line bg-surface px-3 py-2.5 text-sm text-ink",
        "placeholder:text-subtle",
        "transition-[box-shadow,border-color] duration-150",
        "focus-visible:border-forest focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-forest)_22%,transparent)]",
        className,
      )}
      {...props}
    />
  );
}
