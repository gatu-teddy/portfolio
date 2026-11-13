import type { Metadata, Viewport } from "next";
import { Onest } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const onest = Onest({ subsets: ["latin"], display: "swap", variable: "--font-onest" });

export const metadata: Metadata = {
  title: "Teddy Gatu — Portfolio",
  description: "Portfolio of Teddy Gatu, full-stack developer.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={onest.variable} data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Apply the saved theme before first paint so the page never flashes the wrong one. */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{if(localStorage.getItem("theme")==="light")document.documentElement.dataset.theme="light"}catch(e){}`}
        </Script>
      </head>
      <body>
        {children}
        {/* Cloudflare Web Analytics */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          type="module"
          data-cf-beacon='{"token": "d6a9553c1b624fcf9ca168e8b86b1df7"}'
        />
      </body>
    </html>
  );
}
