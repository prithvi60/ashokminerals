import Image from "next/image";

const WhyAshokMinerals = () => {
  return (
    <section className="w-full h-full py-10 sm:py-14 font-RobotoSlab">
      <div className="flex flex-col-reverse w-full h-full md:flex-row">
        <div className="space-y-4 px-14 py-14 md:basis-1/2 bg-warning text-primary">
          <h3 className="text-lg font-light tracking-wide sm:text-xl lg:text-3xl">
            Why{" "}
            <strong className="font-bold">
              HiTech Minerals and Chemicals Group
            </strong>
          </h3>
          <p className="text-sm font-normal tracking-normal sm:text-base ">
            Our complete focus to satisfy our clients with high end products has
            conferred upon us huge accolades and an extensive customer support
            in market. HTMC has emerged as the leading industrial mineral
            company,catering to diverse sectors with its extensive range of
            products and unparalleled serviceThe whole range is manufactured at
            our own production site with the incorporation of ultra modern
            technology and incomparable skills of our team leading to the
            development of outstanding range that fits to diverse needs of our
            clients.
          </p>
        </div>
        <div className="md:basis-1/2 relative w-full h-[60vh] md:h-[100vh]">
          <Image
            alt="image"
            fill
            src={"/whyUs.jpg"}
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse w-full h-full md:flex-row">
        <div className="md:basis-1/2 relative w-full h-[60vh] md:h-[100vh]">
          <Image
            alt="image"
            fill
            src={"/factory.jpg"}
            className="object-cover object-center"
          />
        </div>
        <div className="space-y-4 text-black px-14 py-14 md:basis-1/2 bg-secondary">
          <h3 className="text-lg font-light tracking-wide sm:text-xl lg:text-3xl">
            Comprehensive {" "}
            <strong className="font-bold">Mineral Solutions</strong>
          </h3>
          <p className="text-sm font-normal tracking-normal sm:text-base text-zinc-500">
            Our complete focus to satisfy our clients with high end products has
            conferred upon us huge accolades and an extensive customer support
            in market. HTMC has emerged as the leading industrial mineral
            company,catering to diverse sectors with its extensive range of
            products and unparalleled serviceThe whole range is manufactured at
            our own production site with the incorporation of ultra modern
            technology and incomparable skills of our team leading to the
            development of outstanding range that fits to diverse needs of our
            clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyAshokMinerals;
