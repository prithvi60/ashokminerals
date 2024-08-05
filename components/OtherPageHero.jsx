import Image from "next/image";

const OtherPageHero = ({ title, imgSrc, para, para2 }) => {
  return (
    <section className="w-full h-full overflow-hidden mt-28">
      <div className="relative w-full h-[45dvh]">
        <Image
          alt=""
          src={imgSrc}
          fill
          className="object-cover object-center brightness-[0.30]"
        />
        <div className="absolute top-20 md:top-28 lg:top-32 p-3 font-RobotoSlab left-6 sm:left-10 lg:left-16 block space-y-4 w-[90%] lg:w-3/4">
          <h3 className="text-2xl font-bold tracking-wider capitalize sm:text-3xl lg:text-4xl text-primary">
            {title}
          </h3>
          <p
            className={`text-base font-normal sm:text-lg text-primary ${
              para2 !== "" ? "hidden md:block" : "block"
            }`}
          >
            {para}
          </p>
          <p
            className={`text-base font-normal sm:text-lg text-primary ${
              para2 !== "" && "block md:hidden"
            }`}
          >
            {para2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OtherPageHero;
