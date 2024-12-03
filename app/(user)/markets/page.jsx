import { FlipProductsCard } from "@/components/FlipProductsCard";
import { MarketShowcase } from "@/components/MarketShowcase";
import OtherPageHero from "@/components/OtherPageHero";

const Home = () => {
  return (
    <section>
      <OtherPageHero title={"Market"} imgSrc={"/hero_1.jpg"} />
      <MarketShowcase/>
    </section>
  );
};

export default Home;
