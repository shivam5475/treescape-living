import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary: [
    "bg-ink text-cream",
    "hover:bg-moss",
    "active:bg-moss-light",
  ].join(" "),

  secondary: [
    "border border-ink bg-transparent text-ink",
    "hover:bg-ink hover:text-cream",
  ].join(" "),

  ghost: [
    "bg-transparent text-ink",
    "hover:bg-sage-wash",
  ].join(" "),
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-11 items-center justify-center",
        "rounded-sm px-5 py-2.5",
        "font-body text-sm font-medium",
        "transition-[background-color,color,border-color,transform]",
        "duration-250ms ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:-translate-y-px active:translate-y-0",
        "focus-visible:outline-2 focus-visible:outline-offset-3",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}