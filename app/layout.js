import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-robotoSlab",
  weight: ["700", "400"],
});

export const metadata = {
  title: "Ashok Minerals Enterprise",
  description:
    "Ashok Minerals stands as a leading producer of coarse, fine & ultra-fine industrial and specialty minerals, offering a diverse and comprehensive range of products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${robotoSlab.variable} `}>{children}</body>
    </html>
  );
}
