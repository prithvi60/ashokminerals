import Image from "next/image";
import { BreadCrumbs } from "./BreadCrumbs";

const OtherPageHero = ({ title, imgSrc, para, para2 }) => {
  return (
    <section className="w-full h-full space-y-10 mt-28">
      <div className="overflow-hidden">
        <div className="relative w-full h-[40dvh] flex items-center justify-center">
          {/* Background Image */}
          <Image
            alt=""
            src={imgSrc}
            fill
            className="object-cover object-center brightness-[0.70]"
          />

          {/* Content Block */}
          <div className="absolute top-0 left-0 z-20 px-6 space-y-6 py-7 sm:space-y-2 sm:px-10 lg:px-64">
            <div>
              <BreadCrumbs />
            </div>
            <div className="relative size-36 sm:size-40 xl:size-48">
              <Image
                alt="ashok minerals logo"
                fill
                src={"/ashok-minerals-logo.svg"}
                className="opacity-80 brightness-[1.20]"
              /></div>
            {/* <div className="block w-full mt-16 space-y-8 font-RobotoSlab">
              <p className={`text-base font-normal sm:text-lg text-primary ${para2 !== "" ? "hidden md:block" : "block"}`}>
                {para}
              </p>
              <p className={`text-base font-normal sm:text-lg text-primary ${para2 !== "" && "block md:hidden"}`}>
                {para2}
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <h3 className="px-6 text-2xl font-bold tracking-wider capitalize sm:text-3xl lg:text-4xl sm:px-10 lg:px-64">
        {title}
      </h3>
    </section>

  );
};

export default OtherPageHero;
