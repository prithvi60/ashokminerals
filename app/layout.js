import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-robotoSlab",
  weight: ["700", "400"],
});

// export const metadata = {
//   title: "Ashok Minerals Enterprise",
//   description:
//     "Ashok Minerals stands as a leading producer of coarse, fine & ultra-fine industrial and specialty minerals, offering a diverse and comprehensive range of products.",
// };
export const metadata = {
  title: "Ashok Minerals Enterprise",
  description: "Processor of Industrial Minerals since 1956",
  metadataBase: new URL("https://ashokminerals.com/"),
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
      <body className={`${robotoSlab.variable} `}>{children}</body>
    </html>
  );
}
