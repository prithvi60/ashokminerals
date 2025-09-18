import Image from "next/image";
import Link from "next/link";
import { BsArrowDownRightCircleFill } from "react-icons/bs";

export const FlipProductsCard = ({ data, type }) => {
  return (
    <section
      className={`${type === "blog" || type === "markets" ? "" : "px-6 py-10 sm:py-12 sm:px-10 lg:px-16 xl:px-64"} block space-y-6 sm:space-y-10 font-RobotoSlab`}
    >
      <div className="grid w-full h-full grid-cols-1 mt-20 gap-x-10 gap-y-24 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 font-RobotoSlab place-content-center place-items-center">
        {data.map((product, id) => (
          <Link
            title={product.title.toLowerCase()}
            href={`${type === "blog" ? "/blog/" : type === "markets" ? "/markets/" : "/products/"}${product.slug.current}`}
            className="relative w-full h-full card flipCard"
            key={id}
          >
            <div className="relative w-full h-48 rounded-md shadow-xl cursor-pointer sm:max-w-80 2xl:max-w-96 sm:h-56 bg-secondary group frontSideCard">
              <div className="absolute w-full h-full -translate-x-1/2 left-1/2 -top-16 md:-top-12 max-w-56 max-h-44">
                <Image
                  title={product.imageAlt}
                  fill
                  alt={product.imageAlt}
                  className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] group-hover:scale-110 transition-all duration-300 ease-linear"
                  src={product.imageUrl}
                  quality={100}
                />
              </div>
              <h2 className={`absolute text-base font-medium tracking-wide !capitalize transition-all ease-linear bottom-8 md:bottom-5 sm:text-lg lg:text-xl group-hover:text-warning duration-400 font-RobotoSlab ${product.title.length > 26 ? "left-2.5 md:left-3.5" : "left-1/2 -translate-x-1/2"}`}>
                {product.title.toLowerCase()}
              </h2>
            </div>
            <div className="absolute top-0 left-0 flex flex-col items-start justify-between w-full h-48 gap-2 px-6 py-4 rounded-md shadow-xl sm:max-w-80 2xl:max-w-96 sm:h-56 group bg-warning text-primary backSideCard">
              <div className="space-y-2">
                <h3 className="text-lg font-medium tracking-wide font-RobotoSlab !capitalize sm:text-xl lg:text-2xl !leading-6">
                  {product.title.toLowerCase()}
                </h3>
                {type ? (
                  <p className="text-sm font-normal font-Formular line-clamp-2 tracking-widest !leading-snug">
                    {product.blogShortRead}
                  </p>
                ) : (
                  <p className="text-sm font-normal font-Formular line-clamp-2 sm:line-clamp-3 tracking-widest !leading-snug">
                    {product.summary}
                  </p>
                )}
              </div>
              <h3 className="flex items-center gap-3 text-base md:text-xl font-semibold tracking-wider underline capitalize transition-all duration-300 ease-out text-primary underline-offset-4 hover:no-underline">
                Read more
                <span>
                  <BsArrowDownRightCircleFill className="mt-1 text-2xl md:text-3xl -rotate-90 animate-pulse" />
                </span>
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
