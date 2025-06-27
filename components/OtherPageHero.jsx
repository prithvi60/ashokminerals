import Image from "next/image";
import { BreadCrumbs } from "./BreadCrumbs";

const OtherPageHero = ({ title, imgSrc, para, para2, type }) => {
  return (
    <section className="w-full h-full space-y-10 mt-28">
      <div className="overflow-hidden">
        <div className="relative w-full h-[40dvh] flex items-center justify-center">
          {/* Background Image */}
          <Image
            alt=""
            src={imgSrc}
            fill
            className={`${type ? "object-fill object-center" : " object-cover"} object-center brightness-[0.70]`}
          />

          {/* Content Block */}
          <div className="absolute top-0 left-0 z-20 px-6 space-y-6 py-7 sm:space-y-2 sm:px-10 lg:px-16 xl:px-64">
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
          </div>
        </div>
      </div>
      {!type && (
        <h3 className="w-full text-3xl md:text-[44px] px-6 font-medium tracking-wide capitalize sm:px-10 lg:px-16 xl:px-64">
          {title}
        </h3>
      )}
    </section>

  );
};

export default OtherPageHero;
