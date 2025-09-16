import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-robotoSlab",
  weight: ["700", "400"],
});

const formular = localFont({
  src: [
    {
      path: "../app/formular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-formular",
});

export const metadata = {
  title: "Ashok Minerals Enterprise",
  description: "Processor of Industrial Minerals since 1956",
  metadataBase: new URL("https://ashokminerals.com/"),
  icons: {
    icon: "/Ashok-Minerals-Final-Logo.jpg",
  },
  keywords: [
    "best mineral manufacturers india",
    "chennai mineral exporters",
    "chennai mineral manufacturing companies",
    "chennai mining corporations",
    "indian mineral manufacturing industry",
    "indian mineral product companies",
    "largest mineral manufacturers india",
    "leading mineral companies uae",
    "list of mineral companies in india",
    "mineral exporters in india",
    "mineral manufacturers in chennai",
    "mineral manufacturers in india",
    "mineral manufacturers in uae",
    "mineral manufacturing corporations",
    "mineral supply companies uae",
    "minerals india uae trading",
    "top mineral manufacturers in india",
    "uae mineral production companies",
    "uae mineral suppliers",
    "uae mining companies",
  ],
  openGraph: {
    title: "Ashok Minerals Enterprise",
    description: "Processor of Industrial Minerals since 1956",
    url: "https://ashokminerals.com/",
    images: [
      {
        url: "/hero_1.jpg",
        width: 1200,
        height: 630,
        alt: "Ashok Minerals ",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ahrefsKey = process.env.NEXT_PUBLIC_AHREFS_KEY || '';
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${robotoSlab.variable} ${formular.variable}`}>
        {children}
      </body>
      {/* Ahrefs Analytics Script */}
            {ahrefsKey && (
              <Script
                id="ahrefs-analytics"
                strategy="afterInteractive"
                src="https://analytics.ahrefs.com/analytics.js"
                data-key={ahrefsKey}
                async
              />
            )}
      
            {/* Google Tag Manager (gtag.js) */}
            {gtmId && (
              <>
                <Script
                  id="gtag"
                  strategy="afterInteractive"
                  src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
                  async
                />
                <Script
                  id="gtag-config"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gtmId}');
                      `,
                  }}
                />
              </>
            )}
    </html>
  );
}
