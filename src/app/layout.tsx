import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
      <body className="flex min-h-screen flex-col bg-lele-white text-lele-navy antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
