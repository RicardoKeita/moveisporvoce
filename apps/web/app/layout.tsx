import type { Metadata } from "next";
import localFont from "next/font/local";

const barlow = localFont({
  src: [
    {
      path: "../public/fonts/Barlow-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Barlow-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Móveis Por Você - Faça Seus Móveis Planejados",
  description:
    "Aprenda a fazer seus próprios móveis planejados com o método Móveis Por Você.",
  robots: { index: false, follow: false },
  icons: { icon: "/brand/Icone-preto.svg", apple: "/brand/Icone-preto.svg" },
  openGraph: {
    title: "Móveis pensados para a sua casa. Projetados por você.",
    description:
      "Conheça o curso Móveis Por Você e o caminho entre projeto, central de corte e montagem.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={barlow.variable}>
      <body>{children}</body>
    </html>
  );
}
