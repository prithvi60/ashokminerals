import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import Image from "next/image";
import { Button } from "@heroui/button";
import { FaRegClock } from "react-icons/fa6";
import { FlipProductsCard } from "./FlipProductsCard";

const Blog = async ({ posts }) => {
  return (
    <section className="w-full h-full px-6 py-10 space-y-8 font-RobotoSlab sm:px-10 lg:px-16 xl:px-64 ">
      {posts.length > 0 && (
        <div className="w-full h-full">
          <FlipProductsCard data={posts} type={"blog"} />
        </div>
      )}
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
