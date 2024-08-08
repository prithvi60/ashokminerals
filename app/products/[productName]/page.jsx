import OtherPageHero from "@/components/OtherPageHero";
import { ProductSpecification } from "@/components/ProductSpecification";

const Home = () => {
  return (
    <section>
      <OtherPageHero title={"Product Specification"} imgSrc={"/hero_2.jpg"} />
      <ProductSpecification />
    </section>
  );
};

export default Home;
