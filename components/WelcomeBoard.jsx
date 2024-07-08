import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";
import { FaUpRightFromSquare } from "react-icons/fa6";

const WelcomeBoard = () => {
  return (
    <section className="w-full h-full px-6 py-10 space-y-7 sm:px-10 lg:px-16 xl:px-40 sm:py-14 font-RobotoSlab">
      <h3 className="relative w-full text-3xl text-warning font-semibold sm:text-4xl lg:text-6xl sm:w-4/5 mx-auto after:absolute after:content-[''] after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:h-1 after:rounded-sm after:w-24 after:bg-black/80 text-center ">
        Excellence in{" "}
        <strong className="font-bold text-black">
          Industrial and Specialty Minerals
        </strong>
      </h3>
      <p className="w-full mx-auto text-base font-normal text-center sm:text-lg sm:w-4/5 text-zinc-700">
        {/* Excellence in Industrial and Specialty Minerals
        <br /> */}
        Ashok Minerals stands as a leading producer of coarse, fine & ultra-fine
        industrial and specialty minerals, offering a diverse and comprehensive
        range of products.
      </p>
      <div className="block w-full text-center">
        <Button
          as={Link}
          color="warning"
          href="/about_us"
          variant="solid"
          size="lg"
          className="text-base font-semibold text-white capitalize sm:text-lg font-RobotoSlab"
        >
          Learn More
          <FaUpRightFromSquare className="text-base font-semibold ms-2 sm:text-lg text-primary" />
        </Button>
      </div>
    </section>
  );
};

export default WelcomeBoard;
