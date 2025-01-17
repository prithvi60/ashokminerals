import { FlipProductsCard } from "@/components/FlipProductsCard";
import OtherPageHero from "@/components/OtherPageHero";
import { client } from "@/sanity/lib/client";
import { PRODUCTS_QUERY } from "@/sanity/Queries";

const Home = async () => {
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
    <section>
      <OtherPageHero title={"Products"} imgSrc={"/hero_1.jpg"} />
      <FlipProductsCard data={products} />
    </section>
  );
};

export default Home;
