import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

interface FieldProps {
  label?: string;
  htmlFor?: string;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

export function Field({
  label,
  htmlFor,
  hint,
  error,
  children,
  className,
}: FieldProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      {label && <Label htmlFor={htmlFor}>{label}</Label>}

      {children}

      {error ? (
        <p className="type-body-sm text-clay" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="type-body-sm text-sage">{hint}</p>
      ) : null}
    </div>
  );
}