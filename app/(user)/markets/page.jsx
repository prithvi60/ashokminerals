import { MarketShowcase } from "@/components/MarketShowcase";
import OtherPageHero from "@/components/OtherPageHero";
import { client } from "@/sanity/client";
import { MARKETLIST_QUERY } from "@/sanity/Queries";

const Home = async () => {

  const marketList = await client.fetch(
    MARKETLIST_QUERY,
    {},
    {
      cache: "no-cache",
      next: {
        tags: ["post", "markets", "products"],
      },
    }
  );


  return (
    <section>
      <OtherPageHero title={"Market"} imgSrc={"/hero_1.jpg"} />
      <MarketShowcase markets={marketList} />
    </section>
  );
};

export default Home;
