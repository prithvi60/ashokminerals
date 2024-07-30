"use client";

import Image from "next/image";
import Slider from "react-slick";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
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

const Banner = () => {
  // const [isActive, setIsActive] = useState(0);
  const [blur, setBlur] = useState(true);
  const loadingImage = useRef();

  useEffect(() => {
    if (loadingImage.current.complete) {
      setBlur(false);
      console.log("after");
    }

    loadingImage.current.addEventListener("load", () => {
      setBlur(false);
      console.log("before");
    });

  }, []);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   fade: true,
  //   speed: 1000,
  //   autoplay: 2000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   appendDots: (dots) => (
  //     <div
  //       style={{
  //         position: "absolute",
  //         bottom: 30,
  //         left: "50%",
  //         //   backgroundColor: "transparent",
  //         width: "max-content",
  //         transform: "translateX(-50%)",
  //       }}
  //     >
  //       <ul style={{ margin: "0px" }}> {dots} </ul>
  //     </div>
  //   ),
  //   beforeChange: (prev, next) => {
  //     setIsActive(next);
  //   },
  //   customPaging: (i) => (
  //     <div
  //       className={` w-5 h-5 sm:w-6 sm:h-6 rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 relative after:content-[''] after:w-2 after:h-2 sm:after:w-3 sm:after:h-3 after:rounded-full after:hover:bg-warning ${
  //         i === isActive
  //           ? "after:bg-warning border-2 border-warning"
  //           : "after:bg-secondary/80 border-secondary/80 border-2"
  //       } `}
  //     />
  //   ),
  // };
  
  return (
    <section className="relative w-full h-full overflow-hidden slider-container">
      {blur === true && (
        <div className="absolute top-0 left-0 w-full h-[90dvh] mt-8">
          <Image
            priority
            loading={"eager"}
            alt="bg image"
            src={"/samplePic.png"}
            style={{ objectFit: "cover", objectPosition: "center" }}
            fill
            className="blur-sm"
          />
        </div>
      )}
      <div className="w-full h-[90dvh] mt-8">
        <video
          muted
          loop
          autoPlay
          playsInline
          ref={loadingImage}
          className={`w-full h-full object-cover translate-y-0 transition-all duration-700 ease-linear brightness-[0.75]`}
        >
          <source src={"/sample.mp4"} type="video/mp4" />
        </video>
        <div className="absolute w-full space-y-4 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-RobotoSlab">
          <h3 className="text-xl font-normal capitalize md:text-3xl text-primary">
            Ashok Minerals
          </h3>
          <h4 className="text-5xl font-bold capitalize md:text-8xl text-primary">
            Industrial minerals
          </h4>
          <p className="text-base tracking-wide uppercase md:text-xl text-primary">
            Talc / Dolomite / IronOxide / Soon...
          </p>
          <div className="flex items-center justify-center w-full gap-5">
            <Button
              as={Link}
              color="warning"
              href="#"
              radius="sm"
              variant="solid"
              className="text-base font-semibold text-white capitalize font-RobotoSlab md:text-xl"
            >
              know more
            </Button>
          </div>
        </div>
      </div>
      {/* <Slider {...settings}>
        {imagSrc.map((img, id) => (
          <div className="relative w-full h-[90dvh]" key={id}>
            <Image
              alt="bg image"
              src={img}
              ref={loadingImage}
              loading="lazy"
              style={{ objectFit: "cover", objectPosition: "center" }}
              fill
              className="brightness-50"
            />
            <div className="absolute w-full space-y-4 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-RobotoSlab">
              <h3 className="text-xl font-normal capitalize md:text-3xl text-primary">
                Ashok Minerals
              </h3>
              <h4 className="text-5xl font-bold capitalize md:text-8xl text-primary">
                Industrial minerals
              </h4>
              <p className="text-base tracking-wide uppercase md:text-xl text-primary">
                Talc / Dolomite / IronOxide / Soon...
              </p>
              <div className="flex items-center justify-center w-full gap-5">
                <Button
                  as={Link}
                  color="warning"
                  href="#"
                  radius="sm"
                  variant="solid"
                  className="text-base font-semibold text-white capitalize font-RobotoSlab md:text-xl"
                >
                  know more
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slider> */}
    </section>
  );
};

export default Banner;
