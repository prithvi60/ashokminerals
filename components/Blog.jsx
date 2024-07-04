"use client";
import { getAllPosts } from "@/libs/query";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { Loader } from "./Loader";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Date } from "./Date";

const Blog = () => {
  const { loading, error, data } = useQuery(getAllPosts);
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="w-full h-full mx-auto text-base font-normal md:text-xl font-RobotoSlab text-info">
        Error Message: {error.message}
      </div>
    );
  }

  // console.log(data);

  return (
    <section className="w-full h-full space-y-8 font-RobotoSlab bg-primary p-3.5 sm:px-16 sm:py-10">
      <h2 className="text-xl font-bold text-center md:text-5xl xl:text-7xl">
        Blogs
      </h2>
      <div className="flex items-start w-full h-full gap-5 max-w-7xl">
        {data?.posts?.nodes?.map((post, idx) => (
          <Card
            className="h-auto max-w-sm pb-4 space-y-3 bg-secondary group"
            key={idx}
          >
            <CardHeader className="!p-0 !pb-2 overflow-hidden">
              <Image
                alt={post?.featuredImage?.node?.altText}
                className="object-contain transition-all duration-500 ease-in-out group-hover:scale-105"
                src={post?.featuredImage?.node?.sourceUrl}
                height={570}
                width={450}
              />
            </CardHeader>
            <CardBody className="flex-col items-start gap-4 px-4 py-3 pb-0">
              <small className="tracking-wide text-default-500">
                <Date dateString={post.modified} />
              </small>
              <p className="text-lg font-bold uppercase">{post.title}</p>
              <div
                className="text-base font-normal line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html: post?.featuredImage?.node?.description,
                }}
              />
            </CardBody>
            <CardFooter>
              <Button
                as={Link}
                href={`blog/${post.slug}`}
                color="warning"
                size="lg"
                className="font-semibold text-primary"
              >
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Blog;
