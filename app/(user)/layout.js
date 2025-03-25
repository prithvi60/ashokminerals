import "../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Providers } from "../providers";
import NavbarComponent from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { getNavbarMenu } from "@/libs/data";

export default async function UserLayout({ children }) {
  // const navbarMenu = await getNavbarMenu();
  // console.log(navbarMenu);

  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Providers>
          {/* <Development /> */}
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
