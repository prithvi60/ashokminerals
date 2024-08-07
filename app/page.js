import BentoGrid from "@/components/BentoGrid";
import Hero from "@/components/Hero";
import OurProducts from "@/components/OurProducts";
import OurStrength from "@/components/OurStrength";
import Testimonials from "@/components/Testimonials";
import WelcomeBoard from "@/components/WelcomeBoard";

export default function Home() {
  return (
    <main>
      <Hero />
      <WelcomeBoard />
      <BentoGrid />
      <OurProducts />
      <Testimonials />
      <OurStrength />
    </main>
  );
}
