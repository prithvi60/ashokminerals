import Banner from "@/components/Banner";
import BentoGrid from "@/components/BentoGrid";
import OurProducts from "@/components/OurProducts";
import OurStrength from "@/components/OurStrength";
import Testimonials from "@/components/Testimonials";
import WelcomeBoard from "@/components/WelcomeBoard";

export default function Home() {
  return (
    <main>
      <Banner />
      <WelcomeBoard />
      <BentoGrid />
      <OurProducts />
      <Testimonials />
      <OurStrength />
    </main>
  );
}
