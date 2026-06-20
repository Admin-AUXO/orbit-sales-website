import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ClarityAnalytics } from "@/components/analytics/ClarityAnalytics";
import { CookieConsent } from "@/components/CookieConsent";
import { manrope } from "@/lib/fonts";
import { defaultMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = defaultMetadata;

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <head>
        <Script id="consent-default" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});var c=null;try{c=localStorage.getItem('ns-consent');}catch(e){}if(c==='granted'){gtag('consent','update',{ad_storage:'granted',analytics_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'});}`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-body">
        {children}
        <CookieConsent />
        <ClarityAnalytics />
      </body>
      <Analytics />
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
