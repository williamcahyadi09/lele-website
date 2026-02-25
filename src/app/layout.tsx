import type { Metadata } from "next";
import { Poppins, Albert_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins-gf",
  display: "swap",
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-albert-sans-gf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LeLe Mandarin - Belajar Bahasa Mandarin dengan Fun dan Efektif",
  description:
    "Belajar Bahasa Mandarin Sampai ke Akar dengan Fun dan Efektif! Le Le Method = memory science + pop culture + Chinese philosophy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} ${albertSans.variable} flex min-h-screen flex-col bg-lele-white text-lele-navy antialiased`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
