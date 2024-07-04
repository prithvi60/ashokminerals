import Banner from "@/components/Banner";
import FloatingButton from "@/components/FloatingButton";
import OurProducts from "@/components/OurProducts";
import WelcomeBoard from "@/components/WelcomeBoard";
import WhyAshokMinerals from "@/components/WhyAshokMinerals";

export default function Home() {
  return (
    <main>
      <Banner />
      <WelcomeBoard />
      <WhyAshokMinerals />
      <OurProducts/>
      <FloatingButton />
    </main>
  );
}
