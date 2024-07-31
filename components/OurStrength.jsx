import { strength } from "@/libs/data";
import Image from "next/image";

const OurStrength = () => {
  return (
    <section className="w-full h-full px-6 py-10 space-y-10 sm:px-10 lg:px-16 sm:py-12 font-RobotoSlab">
      <h3 className="relative w-full text-2xl font-semibold sm:text-3xl lg:text-5xl">
        Our Strength
      </h3>
      <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-4 rounded-sm shadow-md md:grid-rows-none md:grid-flow-col-dense text-primary">
        {/* {strength.map((list, idx) => (
          <div className="block space-y-3 md:min-h-[360px]" key={idx}>
            <div className="relative h-14 w-14 md:w-20 md:h-20">
              <Image
                alt={list.title}
                src={list.src}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h4 className="text-lg font-normal tracking-wide uppercase md:text-xl">
              {list.title}
            </h4>
            <p className="text-sm md:text-base text-zinc-500">{list.desc}</p>
          </div>
        ))} */}
        {strength.map((item, id) => (
          <div
            className={`flex flex-col gap-3 justify-center items-center p-5 ${item.styles}`}
            key={id}
          >
            <div className="relative h-14 w-14 md:w-16 md:h-16">
              <Image
                alt={item.title}
                src={item.src}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h4 className="text-lg font-normal tracking-wide text-center uppercase lg:text-xl">
              {item.title}
            </h4>
          </div>
        ))}
        {/* <div className="flex flex-col items-center justify-center col-span-2 gap-3 p-5 bg-black/55 md:col-span-1">
          <div className="relative h-14 w-14 md:w-16 md:h-16">
            <Image
              alt={"mining"}
              src={"/mining.svg"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h4 className="text-lg font-normal tracking-wide uppercase md:text-xl">
            PROCESSING
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center col-span-2 gap-3 p-5 bg-black/35 md:col-span-1">
          <div className="relative h-14 w-14 md:w-16 md:h-16">
            <Image
              alt={"mining"}
              src={"/mining.svg"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h4 className="text-lg font-normal tracking-wide uppercase md:text-xl">
            QUALITY SERVICE
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center col-span-4 gap-3 p-5 bg-black/75 md:row-span-2 md:col-auto">
          <div className="relative h-14 w-14 md:w-16 md:h-16">
            <Image
              alt={"mining"}
              src={"/mining.svg"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h4 className="text-lg font-normal tracking-wide uppercase md:text-xl">
            WAREHOUSING / JIT
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center col-span-2 gap-3 p-5 bg-black/35 md:col-span-1">
          <div className="relative h-14 w-14 md:w-16 md:h-16">
            <Image
              alt={"mining"}
              src={"/mining.svg"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h4 className="text-lg font-normal tracking-wide uppercase md:text-xl">
            CUSTOMISATION
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center col-span-2 gap-3 p-5 bg-black/55 md:col-span-1">
          <div className="relative h-14 w-14 md:w-16 md:h-16">
            <Image
              alt={"mining"}
              src={"/mining.svg"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h4 className="text-lg font-normal tracking-wide uppercase md:text-xl">
            LOGISTICS / JIT
          </h4>
        </div> */}
      </div>
    </section>
  );
};

export default OurStrength;
