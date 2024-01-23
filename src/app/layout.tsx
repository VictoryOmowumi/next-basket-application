import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "E-Commerce website built with Next.js and TypeScript.",
};
import Header from "@/componenets/Header";
import Navbar from "@/componenets/Navbar";
import Footer from "@/componenets/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
