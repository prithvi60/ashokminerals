import { BlogSlug } from "@/components/BlogSlug";
import OtherPageHero from "@/components/OtherPageHero";

export default function Home({ params }) {
  return (
    <section>
      <OtherPageHero title={"Blog Details"} imgSrc={"/hero_1.jpg"} para={""} />
      <BlogSlug id={params.slug} />
    </section>
  );
}
