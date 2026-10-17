import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#42131E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://krepgarant.ru"),
  title: "Крепгарант — Оптовые поставки крепежа и метизной продукции",
  description:
    "Полный цикл поставки: от подбора необходимых крепежных изделий до логистики. Любые объемы. Весь ассортимент. Цены производителя со склада в Санкт-Петербурге.",
  keywords: [
    "крепгарант",
    "метизы оптом",
    "крепеж спб",
    "болты",
    "гайки",
    "порошковая окраска крепежа",
    "изготовление крепежа",
    "спецпокрытие крепежа",
    "такелаж",
    "анкеры",
  ],
  authors: [{ name: "Крепгарант" }],
  creator: "Крепгарант",
  openGraph: {
    title: "Крепгарант — Оптовые поставки крепежа и метизной продукции",
    description:
      "Любые объемы. Весь ассортимент. Цены производителя. Собственное производство и склад в Санкт-Петербурге.",
    url: "https://krepgarant.ru/",
    siteName: "Крепгарант",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 300,
        alt: "Крепгарант",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAFAFA] text-[#121212] font-sans antialiased selection:bg-[#42131E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
