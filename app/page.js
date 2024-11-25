import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavbarComponent from "@/components/Navbar";
import OurProducts from "@/components/OurProducts";
import OurStrength from "@/components/OurStrength";
import Testimonials from "@/components/Testimonials";
import WelcomeBoard from "@/components/WelcomeBoard";
import { Providers } from "./providers";
import Development from "@/components/Development";

export default function Home() {
  return (
    <main>
      <Providers>
        <Development />
        <NavbarComponent />
        <Hero />
        <WelcomeBoard />
        <BentoGrid />
        <OurProducts />
        <Testimonials />
        <OurStrength />
        <Footer />
      </Providers>
    </main>
  );
}
