"use client";

import { BsArrowDownRightCircle } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { productSpecimen } from "@/libs/data";
import Slider from "react-slick";

const OurProducts = ({ products }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
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
      <h3 className="relative w-full px-6 pt-10 text-2xl font-semibold m:px-10 lg:px-64 sm:pt-12 sm:text-3xl lg:text-5xl">
        Our Products
      </h3>
      <div className="w-full px-6 pb-10 overflow-hidden m:px-10 lg:px-52 sm:pb-12 font-RobotoSlab slider-container">
        <Slider {...settings} className="custom-slider">
          {products.map((product, id) => (
            <div
              className="relative w-full mx-auto rounded-md shadow-xl max-w-80 2xl:max-w-96 sm:h-56 h-44 bg-secondary group"
              key={id}
            >
              <div className="absolute w-full h-full -translate-x-1/2 left-1/2 -top-12 max-w-56 max-h-44">
                <Image
                  // height={220}
                  // width={220}
                  fill
                  alt={product.imageAlt}
                  className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] group-hover:scale-110 transition-all duration-300 ease-linear"
                  src={product.imageUrl}
                  quality={100}
                />
              </div>
              <div className="absolute text-lg font-semibold tracking-wider capitalize transition-all ease-linear -translate-x-1/2 bottom-10 sm:text-xl lg:text-2xl left-1/2 group-hover:text-warning duration-400">
                <h4 className="">{product.title}</h4>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex items-center justify-center w-full h-full mt-6 md:justify-end">
          <Link
            href={"/products"}
            title="products"
            className="flex items-center gap-2 text-lg transition-colors ease-linear w-max lg:text-xl hover:underline underline-offset-4 hover:text-warning duration-400"
          >
            <h4>View more products</h4>
            <span>
              <BsArrowDownRightCircle className="text-base -rotate-90 sm:text-lg lg:text-xl" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
