import { allProducts } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDownRightCircleFill } from "react-icons/bs";

export const FlipProductsCard = ({ data }) => {
  return (
    <section className="block px-6 py-10 space-y-6 sm:space-y-10 font-RobotoSlab sm:py-12 sm:px-10 lg:px-64">
      <div className="grid w-full h-full grid-cols-1 mt-20 gap-x-10 gap-y-24 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 font-RobotoSlab place-content-center place-items-center">
        {data.map((product, id) => (
          <Link
            href={`/products/${product.slug.current}`}
            className="relative w-full h-full card flipCard"
            key={id}
          >
            <div className="relative w-full h-48 rounded-md shadow-xl cursor-pointer sm:max-w-80 2xl:max-w-96 sm:h-56 bg-secondary group frontSideCard">
              <div className="absolute w-full h-full -translate-x-1/2 left-1/2 -top-16 md:-top-12 max-w-56 max-h-44">
                <Image
                  fill
                  alt={product.imageAlt}
                  className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] group-hover:scale-110 transition-all duration-300 ease-linear"
                  src={product.imageUrl}
                  quality={100}
                />
              </div>
              <h4 className="absolute text-base font-semibold tracking-wider capitalize transition-all ease-linear -translate-x-1/2 bottom-8 md:bottom-5 sm:text-lg lg:text-xl left-1/2 group-hover:text-warning duration-400">
                {product.title}
              </h4>
            </div>
            <div className="absolute top-0 left-0 flex flex-col items-start justify-between w-full h-48 gap-2 px-6 py-4 rounded-md shadow-xl sm:max-w-80 2xl:max-w-96 sm:h-56 group bg-warning text-primary backSideCard">
              <div className="space-y-2">
                <h4 className="text-lg font-semibold tracking-wider capitalize sm:text-xl lg:text-2xl">
                  {product.title}
                </h4>
                <p className="text-sm font-normal line-clamp-4 sm:line-clamp-5">
                  {product.summary}
                </p>
              </div>
              <h4 className="flex items-center gap-3 text-xl font-semibold tracking-wider underline capitalize transition-all duration-300 ease-out text-primary underline-offset-4 hover:no-underline">
                Read more
                <span>
                  <BsArrowDownRightCircleFill className="mt-1 text-3xl -rotate-90 animate-pulse" />
                </span>
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
