import { BlogSlug } from "@/components/BlogSlug";
import OtherPageHero from "@/components/OtherPageHero";
import { client } from "@/sanity/client";
import { MARKET_QUERY } from "@/sanity/Queries";

export const revalidate = 10;

export default async function Home({ params }) {
  const { slug } = params

  const market = await client.fetch(
    MARKET_QUERY,
    { slug },
    {
      cache: "no-cache",
      next: {
        tags: ["post", "markets", "products"],
      },
    }
  );

  return (
    <section>
      <OtherPageHero title={"Market Details"} imgSrc={"/hero_2.jpg"} para={""} />
      <BlogSlug post={market} />
    </section>
  );
}
