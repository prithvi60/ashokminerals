import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${robotoSlab.variable} ${formular.variable}`}>
        {children}
      </body>
    </html>
  );
}
