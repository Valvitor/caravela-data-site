// Fonte única de verdade da marca. Trocar aqui propaga para todo o site.

const WHATSAPP_NUMBER = "5571986944653"; // (71) 9 8694-4653
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Caravela Data e quero entender como funciona um dashboard para o meu negócio.";

export const brand = {
  name: "Caravela Data",
  tagline: "Dashboards de gestão para PMEs",
  description:
    "Painéis de gestão sob medida, construídos em código e atualizados sozinhos. Entregues por quem entende do seu setor — sem licença por usuário e com a sua marca.",
  url: "https://caravela.data",
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  whatsappDisplay: "(71) 9 8694-4653",
  email: "contato@caravela.data",
  // Cores de série para os gráficos (espelham os tokens do tema)
  series: {
    indigo: "#3730a3",
    coral: "#fb7185",
    sage: "#3f8e7d",
    amber: "#d9a441",
    rose: "#e11d48",
    slate: "#94a3b8",
    ink: "#1c1b19",
  },
} as const;

export type Brand = typeof brand;
