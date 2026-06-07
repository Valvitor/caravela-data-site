"use client";

import { useEffect, useState } from "react";

/** Aviso (só em telas pequenas) de que o painel rende mais no computador. Dispensável. */
export function MobileNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("cd_mobile_notice") !== "1") setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  function dismiss() {
    setShow(false);
    try {
      localStorage.setItem("cd_mobile_notice", "1");
    } catch {}
  }

  return (
    <div className="mb-5 flex items-start gap-3 rounded-xl border border-indigo/20 bg-indigo-soft px-4 py-3 lg:hidden">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="mt-0.5 h-5 w-5 flex-none text-indigo"
        aria-hidden
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
      <p className="text-sm text-ink">
        <span className="font-semibold">Melhor no computador.</span> Dá para navegar pelo painel
        aqui, mas a experiência completa, com os gráficos lado a lado, fica melhor numa tela maior.
      </p>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Fechar aviso"
        className="-mr-1 ml-auto flex-none rounded-md p-1 text-muted transition-colors hover:bg-indigo/10 hover:text-indigo"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
