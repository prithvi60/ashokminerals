import { getAllPosts } from "@/libs/query";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { Loader } from "./Loader";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Date } from "./Date";
import { POSTS_QUERY } from "@/sanity/Queries";
import { client } from "@/sanity/client";
import { FaRegClock } from "react-icons/fa6";

const options = { next: { revalidate: 20 } };

const Blog = async () => {
  const posts = await client.fetch(POSTS_QUERY, {}, options);
  // console.log(posts);

  return (
    <section className="w-full h-full px-6 py-10 space-y-8 font-RobotoSlab bg-primary sm:px-10 lg:px-16 xl:px-40">
      {/* <h2 className="text-xl font-bold text-center md:text-5xl xl:text-7xl">
        Blogs
      </h2> */}
      <div className="flex flex-col items-start w-full h-full gap-5 md:flex-row">
        {posts.map((post, idx) => (
          <BlogCard key={idx} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Blog;

const BlogCard = ({ post }) => {
  const readableTime = post.plainBody.filter(Boolean).join(" ");

  const calculateReadTime = (text) => {
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };

  const blogContent = readableTime || "";
  const readingTime = calculateReadTime(blogContent);

  return (
    <Card
      as={Link}
      href={`blog/${post.slug.current}`}
      className="h-auto max-w-sm pb-4 space-y-3 bg-secondary group"
    >
      <CardHeader className="!p-0 !pb-2 overflow-hidden">
        <Image
          alt={post.imageAlt}
          src={post.imageUrl}
          className="object-contain transition-all duration-500 ease-in-out group-hover:scale-105"
          height={570}
          width={450}
        />
      </CardHeader>
      <CardBody className="flex-col items-start gap-4 px-4 py-3 pb-0">
        {/* <small className="tracking-wide text-default-500">
                <Date dateString={post.modified} />
              </small> */}
        <p className="text-lg font-bold uppercase">{post.blogShortRead}</p>
        {/* <div
                className="text-base font-normal line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html: post?.featuredImage?.node?.description,
                }}
              /> */}
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <Button
          color="warning"
          size="lg"
          className="font-semibold text-primary"
        >
          Read More
        </Button>
        <h4 className="flex items-center gap-2 text-sm capitalize">
          <span>
            <FaRegClock className="text-base text-warning" />
          </span>
          {readingTime} min{readingTime > 1 ? "s" : ""} Read
        </h4>
      </CardFooter>
    </Card>
  );
};
