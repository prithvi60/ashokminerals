import { BlogSlug } from "@/components/BlogSlug";
import OtherPageHero from "@/components/OtherPageHero";
import { client } from "@/sanity/client";
import { POST_QUERY } from "@/sanity/Queries";

export const revalidate = 10;

export default async function Home({ params }) {
  const { slug } = params

  const post = await client.fetch(
    POST_QUERY,
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
      <OtherPageHero title={"Blog Details"} imgSrc={"/hero_1.jpg"} para={""} />
      <BlogSlug post={post} />
    </section>
  );
}
