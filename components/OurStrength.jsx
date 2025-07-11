import { strength } from "@/libs/data";
import Image from "next/image";

const OurStrength = () => {
  return (
    <section className="w-full h-full px-6 py-10 space-y-10 sm:px-10 lg:px-16 xl:px-64 sm:py-12 font-RobotoSlab">
      <h3 className="relative w-full text-2xl font-medium sm:text-3xl lg:text-5xl">
        Our Strength
      </h3>
      {/* Grid layout strength section */}
      <div className="grid h-full grid-flow-row-dense grid-cols-4 grid-rows-4 rounded-sm shadow-md md:grid-rows-none md:grid-flow-col-dense text-primary max-h-[550px] ">
        <div className="flex flex-col gap-3 justify-center items-center p-5 h-full bg-[#3A3A3A] col-span-2 row-span-2 md:col-auto">
          <div className="relative h-14 min-h-14 w-14 md:w-20 md:h-20">
            <Image
              alt={"MINING"}
              src={"/mining.svg"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h4 className="text-lg font-normal tracking-wide text-center uppercase lg:text-xl">
            MINING
          </h4>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center p-5 h-full bg-[#635F5F] col-span-2 md:col-span-1">
          <div className="relative h-14 min-h-14 w-14 md:w-20 md:h-20">
            <Image
              alt={"PROCESSING"}
              src={"/processing.svg"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h4 className="text-lg font-normal tracking-wide text-center uppercase lg:text-xl">
            PROCESSING
          </h4>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center p-5 h-full bg-[#8B8989] col-span-2 md:col-span-1">
          <div className="relative h-14 min-h-14 w-14 md:w-20 md:h-20">
            <Image
              alt={"QUALITY SERVICE"}
              src={"/quality.svg"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h4 className="text-lg font-normal tracking-wide text-center uppercase lg:text-xl">
            QUALITY SERVICE
          </h4>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center p-5 h-full bg-[#3A3A3A] col-span-2 row-span-2 md:col-auto">
          <div className="relative h-14 min-h-14 w-14 md:w-20 md:h-20">
            <Image
              alt={"WAREHOUSING"}
              src={"/warehouse.svg"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h4 className="text-lg font-normal tracking-wide text-center uppercase lg:text-xl">
            WAREHOUSING
          </h4>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center p-5 h-full bg-[#635F5F] col-span-2 md:col-span-1">
          <div className="relative h-14 min-h-14 w-14 md:w-20 md:h-20">
            <Image
              alt={"CUSTOMIZATION"}
              src={"/custom.svg"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h4 className="text-lg font-normal tracking-wide text-center uppercase lg:text-xl">
            CUSTOMIZATION
          </h4>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center p-5 h-full bg-[#8B8989] col-span-2 md:col-span-1">
          <div className="relative h-14 min-h-14 w-14 md:w-20 md:h-20">
            <Image
              alt={"LOGISTICS"}
              src={"/logistic.svg"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h4 className="text-lg font-normal tracking-wide text-center uppercase lg:text-xl">
            LOGISTICS
          </h4>
        </div>
      </div>
    </section>
  );
};

export default OurStrength;
