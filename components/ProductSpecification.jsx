"use client";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const ProductSpecification = ({ product }) => {
  return (
    <section className="block px-6 py-10 space-y-6 sm:space-y-10 font-RobotoSlab sm:py-12 sm:px-10 lg:px-16 xl:px-64">
      <h3 className="text-2xl font-medium tracking-wider capitalize sm:text-3xl lg:text-4xl">
        {product.title}
      </h3>
      <div className="relative block space-y-10 md:space-y-20">
        <div className="w-full h-full">
          <div className="relative w-full h-56 overflow-hidden sm:h-96">
            <Image
              alt={product.imageAlt}
              src={product.imageUrl}
              fill
              className="object-cover object-top rounded-md"
            />
          </div>
        </div>
        <div className="max-w-7xl prose font-RobotoSlab w-full prose-blue mx-auto prose-h1:text-3.5xl text-black prose-h1:font-medium prose-h2:text-2xl prose-h2:font-medium prose-h3:text-2xl prose-h3:font-medium prose-h4:text-2xl prose-h4:font-medium prose-p:para prose-p:mt-4 prose-p:mb-4 prose-blockquote:leading-relaxed prose-blockquote:text-lg lg:prose-blockquote:text-xl prose-list:list-disc prose-list-decimal prose-li:marker:text-red-600 prose-li:para prose-strong:font-medium">
          <PortableText
            value={product.blockContent}
            components={customComponents}
          />
        </div>
      </div>
    </section>
  );
};

const customComponents = {
  types: {
    image: ({ value }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={value?.imageUrl}
        alt={value?.alt || "Image"}
        className="w-full h-full max-w-md max-h-full mx-auto mt-12 mb-12 md:mt-20 md:mb-10"
      />
    ),
  },
};
