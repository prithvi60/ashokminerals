import Banner from "@/components/Banner";
import OurProducts from "@/components/OurProducts";
import OurStrength from "@/components/OurStrength";
import Testimonials from "@/components/Testimonials";
import WelcomeBoard from "@/components/WelcomeBoard";
import WhyAshokMinerals from "@/components/WhyAshokMinerals";

export default function Home() {
  return (
    <main>
      <Banner />
      <WelcomeBoard />
      <WhyAshokMinerals />
      <OurProducts />
      <OurStrength />
      <Testimonials />
    </main>
  );
}
