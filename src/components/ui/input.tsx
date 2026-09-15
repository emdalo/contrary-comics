import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-md border border-line bg-surface px-3 text-sm text-ink",
        "placeholder:text-subtle",
        "transition-[box-shadow,border-color] duration-150",
        "focus-visible:border-forest focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-forest)_22%,transparent)]",
        "disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
