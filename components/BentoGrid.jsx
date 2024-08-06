import Image from "next/image";

const BentoGrid = () => {
  return (
    <section className="flex flex-col items-center w-full h-full grid-cols-1 gap-2.5 px-6 py-10 md:grid font-RobotoSlab md:grid-cols-3 sm:px-10 lg:px-16 sm:py-12 lg:gap-6">
      <div className="relative w-full row-span-2 lg:row-span-3 h-56 md:min-h-[550px] overflow-hidden order-1 md:order-none">
        <Image
          alt="image"
          fill
          src={"/factory.jpg"}
          className="object-cover object-center transition-all duration-500 ease-in-out rounded-md hover:scale-110"
        />
      </div>
      <div className="relative order-3 w-full h-56 overflow-hidden md:h-full lg:col-span-1 md:min-h-20 lg:min-h-60 md:order-none">
        <Image
          alt="image"
          fill
          src={"/whyUs.jpg"}
          className="object-cover object-center transition-all duration-500 ease-in-out rounded-md hover:scale-110"
        />
      </div>
      <h3 className="flex items-center justify-center order-4 w-full h-full p-4 text-lg font-light tracking-wide rounded-md lg:col-span-1 md:p-6 sm:text-xl lg:text-2xl text-primary md:order-none bg-[linear-gradient(180deg,_#575757,_#FFFFFF_120%)]">
        Pioneering Calcium Carbonate Mining
      </h3>

      <h3 className="flex items-center justify-center order-2 w-full h-full col-span-2 p-4 text-lg font-light tracking-wide rounded-md lg:row-span-2 md:p-6 sm:text-xl lg:text-2xl text-primary md:order-none bg-[linear-gradient(180deg,_#BF0000,_#FFFFFF_130%)]">
        A Legacy of Excellence: Three Generations of Family Entrepreneurship
      </h3>
    </section>
  );
};

export default BentoGrid;
