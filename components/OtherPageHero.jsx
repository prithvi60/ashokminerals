import Image from "next/image";
import { BreadCrumbs } from "./BreadCrumbs";

const OtherPageHero = ({ title, imgSrc, para, para2 }) => {
  return (
<section className="w-full h-full overflow-hidden mt-28">
  <div className="relative w-full h-[60dvh] flex items-center justify-center">
    {/* Background Image */}
    <Image
      alt=""
      src={imgSrc}
      fill
      className="object-cover object-center brightness-[0.70]"
    />



    {/* Content Block */}
    <div className="absolute top-0 left-0 z-20 px-6 py-10 space-y-6 sm:space-y-10 sm:py-12 sm:px-10 lg:px-64">
      <div>
        <BreadCrumbs />
      </div>
      <div className="w-full flex justify-center">
      <Image
        alt="ashok minerals logo"
        width={250}
        height={250}
        src={"/ashok-minerals-logo.svg"}
        className="opacity-80 w-[200px] sm:w-[250px] max-w-[90%] sm:max-w-[250px] brightness-[1.20]"
      /></div>
      <div className="block  w-full space-y-8 font-RobotoSlab mt-16">
        <h3 className="text-2xl font-bold tracking-wider capitalize sm:text-3xl lg:text-4xl text-primary">
          {title}
        </h3>
        <p className={`text-base font-normal sm:text-lg text-primary ${para2 !== "" ? "hidden md:block" : "block"}`}>
          {para}
        </p>
        <p className={`text-base font-normal sm:text-lg text-primary ${para2 !== "" && "block md:hidden"}`}>
          {para2}
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default OtherPageHero;
