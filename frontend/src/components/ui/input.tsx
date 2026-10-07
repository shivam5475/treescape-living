import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "min-h-11 w-full rounded-sm border border-border bg-white px-4 py-2.5",
        "font-body text-sm text-ink placeholder:text-sage",
        "transition-[border-color,box-shadow,background-color] duration-250ms",
        "focus:border-moss focus:outline-none",
        "focus:shadow-[0_0_0_1px_var(--color-moss)]",
        "disabled:cursor-not-allowed disabled:bg-cream-alt disabled:opacity-60",
        className,
      )}
      {...props}
    />
  );
}