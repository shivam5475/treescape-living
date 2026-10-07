import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Display({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("type-display", className)}
      {...props}
    />
  );
}

export function Heading({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("type-h2", className)}
      {...props}
    />
  );
}

export function Text({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("type-body", "text-ink-soft", className)}
      {...props}
    />
  );
}

export function Eyebrow({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("type-eyebrow", "text-moss", className)}
      {...props}
    />
  );
}

export function Meta({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("type-meta", "text-sage", className)}
      {...props}
    />
  );
}