import Blog from "@/components/Blog";
import OtherPageHero from "@/components/OtherPageHero";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/Queries";

export default async function Home() {
  let posts = [];
  try {
    posts = await client.fetch(
      POSTS_QUERY,
      {},
      {
        cache: "no-cache",
        next: {
          tags: ["post", "markets", "products"],
        },
      }
    );
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }
  return (
    <main>
      <OtherPageHero title={"Blog"} imgSrc={"/hero_4.jpg"} />
      <Blog posts={posts} />
    </main>
  );
}
