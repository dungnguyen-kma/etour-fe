import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./libs/Header";
import Footer from "./libs/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "tournament",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
