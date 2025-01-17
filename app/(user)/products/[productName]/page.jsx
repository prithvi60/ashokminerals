import OtherPageHero from "@/components/OtherPageHero";
import { ProductSpecification } from "@/components/ProductSpecification";
import { client } from "@/sanity/lib/client";
import { PRODUCT_QUERY } from "@/sanity/Queries";

const Home = async ({ params }) => {
  const { productName } = params;

  const product = await client.fetch(
    PRODUCT_QUERY,
    { productName },
    {
      cache: "no-cache",
      next: {
        tags: ["products"],
      },
    }
  );

  return (
    <section>
      <OtherPageHero title={"Product Specification"} imgSrc={"/hero_2.jpg"} />
      <ProductSpecification product={product} />
    </section>
  );
};

export default Home;
