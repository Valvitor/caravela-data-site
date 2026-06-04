import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const alt = `${brand.name} — ${brand.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fafaf7",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#3730a3",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 700, color: "#1c1b19" }}>{brand.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.08,
              maxWidth: 980,
              letterSpacing: -1,
            }}
          >
            <div style={{ color: "#1c1b19" }}>Painéis que se atualizam sozinhos.</div>
            <div style={{ color: "#3730a3" }}>Decisões que não esperam o fim do mês.</div>
          </div>
          <div style={{ fontSize: 28, color: "#6b6862", maxWidth: 880 }}>
            Dashboards de gestão sob medida para PMEs — com a sua marca e sem licença por usuário.
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {["Contabilidade", "E-commerce", "Saúde"].map((s) => (
            <div
              key={s}
              style={{
                fontSize: 22,
                color: "#3730a3",
                background: "#eef0fb",
                padding: "8px 20px",
                borderRadius: 999,
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
