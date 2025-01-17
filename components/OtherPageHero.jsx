import Image from "next/image";
import { BreadCrumbs } from "./BreadCrumbs";

const OtherPageHero = ({ title, imgSrc, para, para2 }) => {
  return (
    <section className="w-full h-full overflow-hidden mt-28">
      <div className="relative w-full h-[60dvh]">
        <Image
          alt=""
          src={imgSrc}
          fill
          className="object-cover object-center brightness-[0.30]"
        />
        <Image
          alt="ashok minerals logo"
          width={250}
          height={250}
          style={{ objectFit: "contain", objectPosition: "center" }}
          src={"/ashok-minerals-logo.svg"}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2 opacity-80 top-32 left-1/2"
        />
        <div className="absolute top-0 left-0 z-20 px-6 py-10 space-y-6 sm:space-y-10 sm:py-12 sm:px-10 lg:px-64">
          <div className="">
            <BreadCrumbs />
          </div>
          <div className="block w-2/5 space-y-4 font-RobotoSlab">
            <h3 className="text-2xl font-bold tracking-wider capitalize sm:text-3xl lg:text-4xl text-primary">
              {title}
            </h3>
            <p
              className={`text-base font-normal sm:text-lg text-primary ${para2 !== "" ? "hidden md:block" : "block"
                }`}
            >
              {para}
            </p>
            <p
              className={`text-base font-normal sm:text-lg text-primary ${para2 !== "" && "block md:hidden"
                }`}
            >
              {para2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherPageHero;
