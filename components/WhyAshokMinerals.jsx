import Image from "next/image";

const WhyAshokMinerals = () => {
  return (
    <section className="w-full h-full py-10 sm:py-14 font-RobotoSlab">
      <div className="flex flex-col-reverse w-full h-full md:flex-row">
        <div className="px-8 space-y-4 sm:px-14 py-14 md:basis-1/2 bg-warning text-primary">
          <h3 className="text-lg font-light tracking-wide sm:text-xl lg:text-3xl">
            A Legacy of Excellence:{" "}
            <strong className="font-bold">
              Three Generations of Family Entrepreneurship
            </strong>
          </h3>
          <p className="text-sm font-normal tracking-normal sm:text-base ">
            Welcome to our journey through time. We are proud to share the story
            of our family-run business, now in its third generation, that has
            evolved into a significant name in the mining and mineral industry
            of South India.
          </p>
        </div>
        <div className="md:basis-1/2 relative w-full h-[60vh] md:h-[100vh]">
          <Image
            alt="image"
            fill
            src={"/factory.jpg"}
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="flex flex-col w-full h-full md:flex-row">
        <div className="md:basis-1/2 relative w-full h-[60vh] md:h-[100vh]">
          <Image
            alt="image"
            fill
            src={"/whyUs.jpg"}
            className="object-cover object-center"
          />
        </div>
        <div className="px-8 space-y-4 text-black sm:px-14 py-14 md:basis-1/2 bg-secondary">
          <h3 className="text-lg font-light tracking-wide sm:text-xl lg:text-3xl">
            Pioneering{" "}
            <strong className="font-bold ms-1.5 mt--1">Calcium Carbonate Mining</strong>
          </h3>
          <p className="text-sm font-normal tracking-normal sm:text-base text-zinc-500">
            The entrepreneurial spirit led us to explore new opportunities. We
            ventured into owning and operating Calcium Carbonate Mines in the
            Salem District of Tamil Nadu, India. This significant step not only
            diversified our operations but also strengthened our presence in the
            mineral sector.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyAshokMinerals;
