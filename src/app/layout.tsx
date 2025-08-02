import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../lib/fontawesome";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "IKIGAIVILLA - TRUNG TÂM PHỨC HỢP NGHỈ DƯỠNG IKIGAI VIỆT NAM",
  description: "IKIGAIVILLA - TRUNG TÂM PHỨC HỢP NGHỈ DƯỠNG IKIGAI VIỆT NAM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
