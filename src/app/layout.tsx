import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "7-Segment Display Controller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className="text-6xl font-bold text-center p-8">
          <span className="text-red-600">7</span> Segements Digital Project
        </h1>

        {children}
      </body>
    </html>
  );
}
