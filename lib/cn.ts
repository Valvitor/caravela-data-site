export type ClassValue = string | number | false | null | undefined;

/** Junta classes condicionais, ignorando valores falsy. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
