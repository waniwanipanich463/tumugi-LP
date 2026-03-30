import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoNSJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "つむぎ部屋 | 紡いだ努力が、未来の地図になる。",
  description: "あなたの努力を独自の価値に紡ぎ直し、新しい日常を実現するためのオンラインコミュニティ。",
  icons: {
    icon: "/fabicon.png",
    apple: "/fabicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S6GGM5GHYD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-S6GGM5GHYD');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${notoNSJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
