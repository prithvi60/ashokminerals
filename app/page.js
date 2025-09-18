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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ashok Minerals Enterprise",
    image: "/Ashok-Minerals-Final-Logo.jpg",
    description: "Processor of Industrial Minerals since 1956",
    email: ["vanessa@ashokminerals.com", "marketing@ashokminerals.com"],
    url: "https://ashokminerals.com/",
  };
  const jsonLdLocal = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ashok Minerals Enterprise",
    image: "/Ashok-Minerals-Final-Logo.jpg",
    url: "https://ashokminerals.com/products",
    telephone: "+91 9840899343",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2A, first street, Karpagambal nagar, Kottivakam",
      addressLocality: "Chennai, Tamil Nadu",
      postalCode: "600041",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocal) }}
      />
      <Providers>
        <NavbarComponent />
        <Hero />
        <WelcomeBoard />
        <BentoGrid />
        <OurProducts products={products} />
        <OurStrength />
        <ContactForm />
        <Footer />
        <FloatingButton />
      </Providers>
    </main>
  );
}
