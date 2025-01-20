import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavbarComponent from "@/components/Navbar";
import OurProducts from "@/components/OurProducts";
import OurStrength from "@/components/OurStrength";
import WelcomeBoard from "@/components/WelcomeBoard";
import { Providers } from "./providers";
import { ContactForm } from "@/components/ContactForm";
import FloatingButton from "@/components/FloatingButton";
import { client } from "@/sanity/lib/client";
import { PRODUCTS_QUERY } from "@/sanity/Queries";

export default async function Home() {
  const products = await client.fetch(
    PRODUCTS_QUERY,
    {},
    {
      cache: "no-cache",
      next: {
        tags: ["products"],
      },
    }
  );

  return (
    <main>
      <Providers>
        {/* <Development /> */}
        <NavbarComponent />
        <Hero />
        <WelcomeBoard />
        <BentoGrid />
        <OurProducts products={products} />
        {/* <Testimonials /> */}
        <OurStrength />
        <ContactForm />
        <Footer />
        <FloatingButton />
      </Providers>
    </main>
  );
}
