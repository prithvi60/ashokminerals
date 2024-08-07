import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavbarComponent from "@/components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Development from "@/components/Development";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import FloatingButton from "@/components/FloatingButton";

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
      <body className={`${robotoSlab.variable} `}>
        <Providers>
          <Development />
          <NavbarComponent />
          {children}
          <ContactForm />
          <Footer />
          <FloatingButton />
        </Providers>
      </body>
    </html>
  );
}
