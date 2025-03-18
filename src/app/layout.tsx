import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Distill Labs | The Cradle of AI Future",
  description: "The Cradle of AI Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-center items-center bg-bg-1 text-text-1`}
      >
        <div className="w-full max-w-7xl grow pb-5 flex flex-col items-center text-center px-4 md:px-8">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
