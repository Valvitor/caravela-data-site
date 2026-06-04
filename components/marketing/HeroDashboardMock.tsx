/** Mock de painel desenhado em SVG/HTML — visual próprio, sem imagem. */
export function HeroDashboardMock() {
  const bars = [42, 58, 49, 67, 71, 64, 82, 88];
  return (
    <div className="anim-floaty relative w-full max-w-md">
      {/* cartão flutuante de KPI */}
      <div className="absolute -left-5 -top-5 z-10 hidden rounded-2xl border border-line bg-surface px-4 py-3 shadow-xl sm:block">
        <p className="text-[10px] uppercase tracking-wide text-faint">Margem</p>
        <p className="tnum font-display text-xl font-semibold text-sage">+18,7%</p>
      </div>
      <div className="absolute -right-4 bottom-8 z-10 hidden rounded-2xl border border-line bg-surface px-4 py-3 shadow-xl sm:block">
        <p className="text-[10px] uppercase tracking-wide text-faint">No-show</p>
        <p className="tnum font-display text-xl font-semibold text-coral">14,2%</p>
      </div>

      {/* corpo do painel */}
      <div className="rounded-3xl border border-line bg-surface p-5 shadow-2xl shadow-indigo/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-lg bg-indigo" />
            <span className="h-2.5 w-24 rounded-full bg-line-strong" />
          </div>
          <span className="h-2.5 w-12 rounded-full bg-line" />
        </div>

        {/* mini KPIs */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { v: "R$ 187k", c: "text-ink" },
            { v: "142", c: "text-indigo" },
            { v: "4,2:1", c: "text-coral" },
          ].map((k, i) => (
            <div key={i} className="rounded-xl bg-paper p-2.5">
              <span className="block h-1.5 w-8 rounded-full bg-line-strong" />
              <span className={`tnum mt-1.5 block font-display text-sm font-semibold ${k.c}`}>{k.v}</span>
            </div>
          ))}
        </div>

        {/* gráfico de linha animado */}
        <div className="mt-4 rounded-xl bg-paper p-3">
          <svg viewBox="0 0 320 110" className="h-28 w-full" fill="none" aria-hidden>
            <defs>
              <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3730a3" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#3730a3" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 86 L40 78 L80 82 L120 60 L160 64 L200 42 L240 46 L280 26 L320 18 L320 110 L0 110 Z" fill="url(#heroFill)" />
            <path
              d="M0 86 L40 78 L80 82 L120 60 L160 64 L200 42 L240 46 L280 26 L320 18"
              stroke="#3730a3"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="anim-draw"
              style={{ ["--len" as string]: "560" }}
            />
            <circle cx="320" cy="18" r="3.5" fill="#fb7185" />
          </svg>
        </div>

        {/* mini barras */}
        <div className="mt-3 flex h-16 items-end gap-1.5 rounded-xl bg-paper p-3">
          {bars.map((h, i) => (
            <span
              key={i}
              className="anim-grow flex-1 rounded-t bg-gradient-to-t from-indigo/40 to-indigo"
              style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
