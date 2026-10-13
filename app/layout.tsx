import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { FooterBlock } from "@/components/FooterBlock";

export const metadata: Metadata = {
  title: "PaylinkUS | Licensed US & Cross‑Border Payment Solutions",
  keywords:
    "PaylinkUS provides licensed payment solutions for the US market and cross‑border businesses. As a FinCEN MSB registered money‑services business operated by PayLink Mango Ltd (BVI), we support US domestic fund transfer, merchant aggregated payment, cross‑border disbursement & remittance. Enjoy reliable and secure transaction experience with our professional support and competitive transaction fees to streamline your payment operations. Connect to our global payment network to deliver efficient, reliable and compliant one‑stop payment solutions for enterprises.",
  description:
    "PaylinkUS is a FinCEN MSB licensed payment brand operated by BVI entity PayLink Mango Ltd. Providing US‑domestic & cross‑border fund flow, B‑side merchant aggregated payment, cross‑border payout & remittance for US merchants and global foreign‑trade enterprises.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className={clsx("min-h-screen bg-background  antialiased")}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="w-full pt-[68px] md:pt-[88px]">{children}</main>
            <FooterBlock />
          </div>
        </Providers>
      </body>
    </html>
  );
}
