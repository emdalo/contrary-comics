import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold tracking-wide transition-[transform,box-shadow,background-color] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-95 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-forest text-forest-fg hover:bg-forest/90 hover:shadow-[0_0_24px_color-mix(in_oklab,var(--color-forest)_40%,transparent)]",
        secondary:
          "bg-teal text-teal-fg hover:bg-teal/90 hover:shadow-[0_0_24px_color-mix(in_oklab,var(--color-teal)_40%,transparent)]",
        outline: "border border-teal bg-transparent text-teal hover:bg-teal/10",
        ghost: "text-ink hover:bg-ink/5",
        danger: "bg-danger text-paper hover:bg-danger/90",
      },
      size: {
        sm: "h-9 rounded-sm px-3 text-sm",
        md: "h-11 rounded-sm px-4 text-sm",
        lg: "h-12 rounded-sm px-6 text-base",
        icon: "size-11 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
