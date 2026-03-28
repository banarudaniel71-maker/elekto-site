import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Elektrotechnik vom Fachbetrieb seit 2004",
  description:
    "Zuverlässige Elektroinstallationen, Photovoltaik, Wartung und moderne Gebäudetechnik für Privat- und Gewerbekunden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="bg-white text-zinc-900 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}