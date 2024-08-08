"use client";
import { getPost } from "@/libs/query";
import { useQuery } from "@apollo/client";
import React from "react";
import { Loader } from "./Loader";
import Image from "next/image";
import { Date } from "./Date";

export const BlogSlug = ({ id }) => {
  //   const id = slug;
  const { loading, error, data } = useQuery(getPost, {
    variables: { id: id },
  });

  if (loading) {
    return (
      <div className="w-full h-[40dvh] flex justify-center items-center">
        <Loader />
      </div>
    );
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
    <section className="w-full h-full px-6 py-10 space-y-8 font-RobotoSlab bg-primary sm:px-12 lg:px-16">
      {/* <h2 className="text-xl font-bold text-center md:text-5xl xl:text-7xl">
        Blog
      </h2> */}
      <div className="relative w-full h-full p-5 space-y-5 rounded-md bg-secondary">
        <small className="text-sm font-normal text-zinc-500">
          <Date dateString={data.post.modified} />
        </small>
        <h3 className="text-xl font-bold tracking-wide md:text-4xl xl:text-5xl">
          {data.post.title}
        </h3>
        <div className="flex gap-3 text-base font-medium sm:text-lg">
          <Image
            alt="image"
            width={30}
            height={30}
            src={data.post.featuredImage.node.author.node.avatar.url}
            className="object-cover rounded-full"
          />
          <h5>Posted By</h5>
          <h5 className="capitalize -ms-2 text-warning">
            {data.post.featuredImage.node.author.node.name}
          </h5>
        </div>
        <div className="flex flex-col items-start w-full h-full gap-5 md:flex-row place-items-start">
          <div className="relative w-full h-[320px] md:basis-1/2 lg:basis-2/5">
            <Image
              alt={data.post.featuredImage.node.altText}
              src={data.post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              quality={100}
              priority
              className="rounded-md"
            />
          </div>
          <div
            className="md:-mt-4 font-RobotoSlab post_content md:basis-1/2 lg:basis-3/5"
            dangerouslySetInnerHTML={{ __html: data?.post?.content }}
          />
        </div>
      </div>
    </section>
  );
};
