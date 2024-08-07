"use client";

import { LuArrowDownRightFromCircle } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { productSpecimen } from "@/libs/data";

const OurProducts = () => {
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(3);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    width >= 1560 ? setCount(4) : setCount(3);
  }, [width]);

  return (
    <section className="w-full h-full px-6 py-10 space-y-24 sm:px-10 lg:px-16 sm:py-12 font-RobotoSlab">
      <h3 className="relative w-full text-2xl font-semibold sm:text-3xl lg:text-5xl">
        Our Products
      </h3>
      <div className="grid w-full h-full grid-cols-1 gap-x-10 gap-y-24 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 font-RobotoSlab place-content-center place-items-center">
        {productSpecimen.slice(0, count).map((item, id) => (
          <div
            className="relative w-full rounded-md shadow-xl cursor-pointer max-w-80 2xl:max-w-96 sm:h-56 h-44 bg-secondary group"
            key={id}
          >
            <div className="absolute w-full h-full -translate-x-1/2 left-1/2 -top-12 max-w-56 max-h-44">
              <Image
                // height={220}
                // width={220}
                fill
                alt={item.title}
                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] group-hover:scale-110 transition-all duration-300 ease-linear"
                src={item.src}
                quality={100}
              />
            </div>
            <div className="absolute text-lg font-semibold tracking-wider capitalize transition-all ease-linear -translate-x-1/2 bottom-10 sm:text-xl lg:text-2xl left-1/2 group-hover:text-warning duration-400">
              <h4 className="">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full h-full mt-6 md:justify-end">
        <Link
          href={"./products"}
          title="products"
          className="flex items-center gap-2 text-lg transition-colors ease-linear w-max lg:text-xl hover:underline underline-offset-4 hover:text-warning duration-400"
        >
          <h4>view more products</h4>
          <span>
            <LuArrowDownRightFromCircle className="text-base -rotate-90 sm:text-lg lg:text-xl" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default OurProducts;
