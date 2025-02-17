import { MarketShowcase } from "@/components/MarketShowcase";
import OtherPageHero from "@/components/OtherPageHero";
import { client } from "@/sanity/client";
import { MARKETS_QUERY, PRODUCTS_QUERY } from "@/sanity/Queries";

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
  // console.log(products.map(val => val.market));

  const markets = await client.fetch(
    MARKETS_QUERY,
    {},
    {
      cache: "no-cache",
      next: {
        tags: ["market"],
      },
    }
  );
  // console.log(products);

  const market = markets.flatMap(val => val.title)
  const prod = products.filter(product =>
    product.market.some(m => market.includes(m.title))
  );
  // console.log(markets);


  return (
    <section>
      <OtherPageHero title={"Market"} imgSrc={"/hero_1.jpg"} />
      <MarketShowcase products={products} markets={markets} />
    </section>
  );
};

export default Home;
