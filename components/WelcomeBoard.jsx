import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";
import { BsArrowDownRightCircle } from "react-icons/bs";

const WelcomeBoard = () => {
  return (
    <section className="grid w-full h-full grid-cols-1 px-6 py-10 md:px-10 lg:px-64 sm:py-12 md:grid-cols-2 gap-7 font-RobotoSlab">
      <h3 className="relative w-full text-xl font-bold text-black sm:text-3xl lg:text-5xl">
        Excellence in Industrial and Specialty Minerals
      </h3>
      <div className="block w-full space-y-7">
        <p className="w-full text-base font-normal opacity-75 sm:text-xl lg:text-2xl">
          Ashok Minerals stands as a leading producer of coarse, fine &
          ultra-fine industrial and specialty minerals, offering a diverse and
          comprehensive range of products.
        </p>
        <Button
          as={Link}
          color="warning"
          href="/our_associations&certifications"
          variant="solid"
          size="lg"
          radius="none"
          className="text-base font-semibold text-white capitalize font-RobotoSlab"
        >
          Know More
          <BsArrowDownRightCircle className="text-base -rotate-90 sm:text-lg lg:text-xl" />
        </Button>
      </div>
    </section>
  );
};

export default WelcomeBoard;
