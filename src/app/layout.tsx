import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Distill U | The Cradle of AI Future",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-bg-1 text-text-1`}
      >
        <div className="max-w-7xl mx-auto grow pb-5 flex flex-col items-center text-center">
          {/*
          <Suspense fallback={<Loader />}>
            <Navbar />
          </Suspense>
          */}
          {children}
        </div>
        <Footer />
        {/*
        <Footer />
        <Suspense fallback={<Loader />}>
          <ScrollToTop />
        </Suspense>
        */}
      </body>
    </html>
  );
}
