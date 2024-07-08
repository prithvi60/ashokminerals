import { BlogSlug } from "@/components/BlogSlug";
import OtherPageHero from "@/components/OtherPageHero";

export default function Home({ params }) {
  return (
    <section>
      <OtherPageHero title={"Blog Content"} imgSrc={"/hero_1.jpg"} />
      <BlogSlug id={params.slug} />
    </section>
  );
}
