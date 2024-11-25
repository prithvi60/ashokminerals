import { FlipProductsCard } from "@/components/FlipProductsCard";
import OtherPageHero from "@/components/OtherPageHero";

const Home = () => {
  return (
    <section>
      <OtherPageHero title={"Products"} imgSrc={"/hero_1.jpg"} />
      <FlipProductsCard/>
    </section>
  );
};

export default Home;
