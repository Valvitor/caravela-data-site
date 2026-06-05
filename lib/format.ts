// Formatação pt-BR centralizada.

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

const brlCents = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const int = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 0 });
const dec1 = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

export function formatBRL(value: number, cents = false): string {
  return (cents ? brlCents : brl).format(value);
}

/** Valores grandes de forma compacta: R$ 1,2 mi / R$ 320 mil */
export function formatBRLCompact(value: number): string {
  if (Math.abs(value) >= 1_000_000) return `R$ ${dec1.format(value / 1_000_000)} mi`;
  if (Math.abs(value) >= 1_000) return `R$ ${int.format(Math.round(value / 1_000))} mil`;
  return brl.format(value);
}

export function formatInt(value: number): string {
  return int.format(value);
}

export function formatPct(value: number, digits = 1): string {
  const f = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
  return `${f.format(value)}%`;
}

export function formatRatio(value: number): string {
  return `${dec1.format(value)}:1`;
}

export type ValueFormat = "brl" | "brlCompact" | "pct" | "int" | "ratio";

/** Formato curto para ticks de eixo: moeda vira "R$ 200k" / "R$ 1,2M" (uma linha só). */
export function formatAxis(value: number, format: ValueFormat): string {
  if (format === "brl" || format === "brlCompact") {
    const abs = Math.abs(value);
    if (abs >= 1_000_000) return `R$ ${dec1.format(value / 1_000_000)}M`;
    if (abs >= 1_000) return `R$ ${int.format(Math.round(value / 1000))}k`;
    return `R$ ${int.format(value)}`;
  }
  return formatValue(value, format);
}

export function formatValue(value: number, format: ValueFormat): string {
  switch (format) {
    case "brl":
      return formatBRL(value);
    case "brlCompact":
      return formatBRLCompact(value);
    case "pct":
      return formatPct(value);
    case "ratio":
      return formatRatio(value);
    case "int":
    default:
      return formatInt(value);
  }
}
