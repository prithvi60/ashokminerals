import { FlipProductsCard } from "@/components/FlipProductsCard";
import { MarketShowcase } from "@/components/MarketShowcase";
import OtherPageHero from "@/components/OtherPageHero";
import { markets } from "@/libs/data";
import { client } from "@/sanity/client";
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
  const market = products.map(market => market.market)
  // const m = markets.map(val => val.name)
  // console.log(m);
  // const filtered = products.filter(val => val.market.includes(m))
  // console.log(filtered);

  return (
    <section>
      <OtherPageHero title={"Market"} imgSrc={"/hero_1.jpg"} />
      <MarketShowcase products={products} market={market} />
    </section>
  );
};

export default Home;
