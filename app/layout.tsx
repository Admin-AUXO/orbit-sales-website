import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { manrope } from "@/lib/fonts";
import { defaultMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-body">{children}</body>
      <Analytics />
    </html>
  );
}
