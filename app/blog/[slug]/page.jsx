import { BlogSlug } from "@/components/BlogSlug";

export default function Home({ params }) {
  return (
    <main>
      <BlogSlug id={params.slug} />
    </main>
  );
}
