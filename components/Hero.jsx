"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";

// const imagSrc = ["/bg_1.jpg", "/bg_2.jpg", "/bg_3.jpg"];

// function NextArrow(props) {
//   const { onClick } = props;
//   return (
//     <div
//       className={
//         "absolute top-1/2 -translate-y-1/2 right-4 lg:right-4 cursor-pointer z-20 bg-black/50 rounded-md"
//       }
//       onClick={onClick}
//     >
//       <RiArrowRightSLine className="text-4xl font-semibold sm:text-5xl text-secondary" />
//     </div>
//   );
// }

// function PrevArrow(props) {
//   const { onClick } = props;
//   return (
//     <div
//       className={
//         "absolute top-1/2 -translate-y-1/2 left-4 lg:left-4 cursor-pointer z-20 bg-black/50 rounded-md"
//       }
//       onClick={onClick}
//     >
//       <RiArrowLeftSLine className="text-4xl font-semibold sm:text-5xl text-secondary" />
//     </div>
//   );
// }

const Hero = () => {
  // const [isActive, setIsActive] = useState(0);
  const [blur, setBlur] = useState(true);
  const loadingImage = useRef();

  useEffect(() => {
    if (loadingImage.current.complete) {
      setBlur(false);
    }

    loadingImage.current.addEventListener("load", () => {
      setBlur(false);
    });
  }, []);

  return (
    <section className="relative w-full h-full overflow-hidden">
      {blur === true && (
        <div
          className={`absolute top-0 left-0 w-full h-[100dvh] ${blur === true ? "block" : "hidden"
            }`}
        >
          <Image
            priority
            loading={"eager"}
            alt="bg image"
            src={"/samplePic2.png"}
            style={{ objectFit: "cover", objectPosition: "center" }}
            fill
            className="blur-sm"
          />
        </div>
      )}
      <div className="w-full h-[100dvh]">
        <video
          muted
          loop
          autoPlay
          playsInline
          ref={loadingImage}
          className={`w-full h-full object-cover object-left md:object-top translate-y-0 transition-all duration-700 ease-linear brightness-[0.75]`}
        >
          <source src={"/sample2.mp4"} type="video/mp4" />
        </video>
        <div className="absolute flex flex-col items-center justify-center w-full h-full space-y-8 text-center -translate-x-1/2 -translate-y-1/2 md:space-y-16 top-1/2 left-1/2 font-RobotoSlab">
          <Image
            alt="ashok minerals logo"
            width={250}
            height={250}
            style={{ objectFit: "contain", objectPosition: "center" }}
            src={"/ashok-minerals-logo.svg"}
            className="z-10"
          />
          <h4 className="px-16 text-3xl font-semibold capitalize md:text-6xl text-primary">
            Processors of <br></br>
            Industrial minerals since 1956
          </h4>

          <div className="flex items-center justify-center w-full gap-5">
            <Button
              as={Link}
              color="warning"
              href="/products"
              radius="none"
              variant="solid"
              size="lg"
              className="mb-16 text-base font-semibold text-white uppercase font-RobotoSlab md:text-xl"
            >
              Explore Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
