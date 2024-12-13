"use client";
import { getPost } from "@/libs/query";
import { useQuery } from "@apollo/client";
import React from "react";
import { Loader } from "./Loader";
import Image from "next/image";
import { Date } from "./Date";
import { PortableText } from "next-sanity";

export const BlogSlug = ({ post }) => {

  return (
    <section className="w-full h-full px-6 py-10 space-y-8 font-RobotoSlab bg-primary sm:px-12 lg:px-64">
      <div className="relative w-full h-full p-5 space-y-5 rounded-md bg-secondary">
        <h3 className="text-xl font-bold tracking-wide md:text-4xl xl:text-5xl">
          {post.title}
        </h3>
        <div className="flex flex-col items-start w-full h-full gap-5 md:flex-row place-items-start">
          <div className="relative w-full h-[320px] md:basis-1/2 ">
            <Image
              alt={post.imageAlt}
              src={post.imageUrl}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              quality={100}
              priority
              className="rounded-md"
            />
          </div>
          <div className="max-w-7xl prose prose-blue mx-auto prose-h1:text-3.5xl prose-h1:font-bold prose-h2:text-2xl prose-h2:font-bold prose-h3:text-2xl prose-h3:font-bold prose-h4:text-2xl prose-h4:font-bold prose-p:leading-relaxed prose-p:text-lg lg:prose-p:text-xl prose-p:mt-4 prose-p:mb-4 prose-blockquote:leading-relaxed prose-blockquote:text-lg lg:prose-blockquote:text-xl prose-list:list-disc prose-list-decimal prose-li:marker:text-red-600">
            <PortableText value={post.body} components={customComponents} />
          </div>
        </div>
      </div>
    </section>
  );
};

const customComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="flex items-center w-full gap-5 my-6 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="flex items-center w-full gap-5 my-6 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="flex items-center w-full gap-5 my-6 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="flex items-center w-full gap-5 my-6 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="flex items-center w-full gap-5 my-6 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="flex items-center w-full gap-5 my-6 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">
        {children}
      </h6>
    ),
    normal: ({ children }) => (
      <p className="ml-10 text-base font-Montserrat lg:text-xl">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-10 space-y-2 list-disc">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="ml-10 space-y-2 list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-5">{children}</li>,
    number: ({ children }) => <li className="ml-5">{children}</li>,
  },
  types: {
    image: ({ value }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={value?.imageUrl} // Use the resolved `imageUrl` from GROQ
        alt={value?.alt || "Image"}
        className="w-full h-full max-w-md max-h-full my-8"
      />
    ),
  },
};