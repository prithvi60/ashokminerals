"use client";

import { BsArrowDownRightCircle, BsArrowDownRightCircleFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { productSpecimen } from "@/libs/data";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const OurProducts = ({ products }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  };

  return (
    <section className="w-full h-full space-y-5 font-RobotoSlab">
      <h3 className="relative w-full px-6 pt-10 text-2xl font-semibold m:px-10 lg:px-16 xl:px-64 sm:pt-12 sm:text-3xl lg:text-5xl">
        Our Products
      </h3>
      <div className="w-full px-6 pb-10 md:px-10 lg:px-52 sm:pb-12 font-RobotoSlab slider-container">
        <Slider {...settings} className="relative custom-slider">
          {products.map((product, id) => (
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
                  <p className="text-sm font-normal tracking-widest !leading-snug line-clamp-3">
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
        </Slider>
        <div className="flex items-center justify-center w-full h-full mt-6 md:justify-end">
          <Link
            href={"/products"}
            title="products"
            className="flex items-center gap-2 text-lg transition-colors ease-linear w-max lg:text-xl hover:underline group underline-offset-4 hover:text-warning duration-400"
          >
            <h4>View more products</h4>
            <span className="inline-block group-hover:animate-shake">
              <BsArrowDownRightCircle className="text-base transition-all duration-500 -rotate-90 sm:text-lg lg:text-xl group-hover:scale-110" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;


function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={
        "p-1.5 md:p-2 xl:p-3 rounded-full border-2 border-solid bg-warning absolute bottom-[350px] lg:bottom-28 cursor-pointer hover:opacity-80 right-5 sm:right-12 lg:-right-16 group hover:animate-pulse"
      }
      onClick={onClick}
    >
      <FaArrowRight className="text-base text-white md:text-lg xl:text-xl group-hover:text-secondary" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={
        "p-1.5 md:p-2 xl:p-3 rounded-full border-2 border-solid bg-warning absolute bottom-[350px] lg:bottom-28 cursor-pointer left-[240px] sm:left-[80%] z-10 hover:opacity-80 lg:-left-16 group"
      }
      onClick={onClick}
    >
      <FaArrowLeft className="text-base text-white md:text-lg xl:text-xl group-hover:text-secondary hover:animate-pulse" />
    </div>
  );
}