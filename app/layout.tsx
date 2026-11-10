import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Jost, Manrope } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ferro & Ouro | Barbearia",
  description:
    "Barbearia premium: corte, barba e acabamento com precisão. Agende seu horário online.",
  icons: { icon: "/brand/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${jost.variable} ${instrument.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}