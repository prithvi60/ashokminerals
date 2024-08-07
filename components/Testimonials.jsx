"use client";
import { marqueeEffect, testimonial } from "@/libs/data";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  // const [isActive, setIsActive] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    fade: true,
    speed: 2000,
    autoplay: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // appendDots: (dots) => (
    //   <div
    //     style={{
    //       position: "absolute",
    //       bottom: -60,
    //       left: "50%",
    //       width: "max-content",
    //       transform: "translateX(-50%)",
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // beforeChange: (prev, next) => {
    //   setIsActive(next);
    // },
    // customPaging: (i) => (
    //   <div
    //     className={` w-2 h-2 sm:w-3 sm:h-3 rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 relative after:content-[''] after:w-0.5 after:h-0.5 sm:after:w-1.5 sm:after:h-1.5 after:rounded-full after:hover:bg-warning ${
    //       i === isActive
    //         ? "after:bg-warning border-2 border-warning"
    //         : "after:bg-secondary/80 border-secondary/80 border-2"
    //     } `}
    //   />
    // ),
  };
  return (
    <section className="w-full h-full py-10 sm:py-12 font-RobotoSlab">
      <div className="overflow-hidden relative w-full h-[40vh]">
        <Image
          alt="background image"
          src={"/bg_3.jpg"}
          fill
          className="object-cover object-center brightness-[0.1]"
        />
        <div className="absolute w-full px-6 py-10 -translate-x-1/2 -translate-y-1/2 sm:px-10 lg:px-16 top-1/2 left-1/2 sm:py-12 text-primary slider-container">
          <Slider {...settings} className="mx-auto w-full md:!w-4/5">
            {testimonial.map((item, id) => (
              <div className="w-full mx-auto space-y-5 " key={id}>
                <p className="text-base font-normal tracking-wide md:text-2xl md:ms-10">
                  {item.review}
                </p>
                <p className="text-lg font-semibold tracking-wider text-right capitalize md:text-3xl">
                  {item.reviewer}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* logo marquee */}
      <div className="w-full h-[20vh]] bg-secondary">
        <div className="w-full h-full px-6 py-6 sm:px-10 lg:px-16">
          <Marquee
            autoFill
            direction="left"
            pauseOnHover
            speed={30}
            gradient
            gradientWidth={50}
            gradientColor="#f2f2f2"
          >
            {marqueeEffect.map((item, idx) => (
              <div
                className="relative w-16 h-16 md:w-24 md:h-24 mx-2.5 md:mx-5 overflow-hidden"
                key={idx}
              >
                <Image
                  alt={item.altTxt}
                  fill
                  src={item.src}
                  className="object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
