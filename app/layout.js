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
  alternates: {
    canonical: "https://ashokminerals.com/",
    languages: {
      "en-US": "/",
    },
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
    type: "website",
    images: [
      {
        url: "https://ashokminerals.com/hero_1.jpg",
        width: 1200,
        height: 630,
        alt: "Ashok Minerals ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashok Minerals Enterprise",
    description: "Processor of Industrial Minerals since 1956",
    images: ["https://ashokminerals.com/hero_1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqJsonLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is the largest producer of barytes in the world?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "China is the largest producer of barytes, followed by India. India's largest barytes mine is in Cuddapah, Andhra Pradesh, with total reserves of 74 million MT."
      }
    },
    {
      "@type": "Question",
      "name": "What is the major group of barite?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Barite (barytes) is a sulfate mineral with the chemical formula BaSO₄. It is known for its high specific gravity (4.0 to 4.5) and low hardness (3–3.5 on Mohs)."
      }
    },
    {
      "@type": "Question",
      "name": "Why is barite so expensive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Barite is relatively inexpensive ($100–200/tonne), but high-purity grades are costlier due to niche uses in paints, coatings, and paper."
      }
    },
    {
      "@type": "Question",
      "name": "What is the market size of barite?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In 2023, the global barite market was valued at $1.5–1.6 billion, with projections to grow to $2.3–2.7 billion by 2030–2033."
      }
    },
    {
      "@type": "Question",
      "name": "What is barite used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Barite is used mainly as a weighting agent in oil and gas drilling, as well as in paper, brake linings, and paints."
      }
    }
  ]
};

const ahrefsKey = process.env.NEXT_PUBLIC_AHREFS_KEY || "";
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${robotoSlab.variable} ${formular.variable}`}>
        {children}
        <Script
          id="faq-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLD),
          }}
        />
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
