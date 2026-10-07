import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full resize-y rounded-sm border border-border bg-white px-4 py-3",
        "font-body text-sm leading-6 text-ink placeholder:text-sage",
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