import Blog from "@/components/Blog";
import OtherPageHero from "@/components/OtherPageHero";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/Queries";

export const revalidate = 10;

export default async function Home() {
  const posts = await client.fetch(
    POSTS_QUERY,
    {},
    {
      cache: "no-cache",
      next: {
        tags: ["post", "author", "category"],
      },
    }
  );
  return (
    <main>
      <OtherPageHero title={"Blog"} imgSrc={"/hero_4.jpg"} />
      <Blog posts={posts} />
    </main>
  );
}
