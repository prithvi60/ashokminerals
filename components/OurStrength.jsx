import { strength } from "@/libs/data";
import Image from "next/image";

const OurStrength = () => {
  return (
    <section className="w-full h-full px-6 py-10 space-y-10 sm:px-10 lg:px-16 sm:py-12 font-RobotoSlab">
      <h3 className="relative w-full text-2xl font-semibold sm:text-3xl lg:text-5xl">
        Our Strength
      </h3>
      <div className="grid h-full grid-flow-row-dense grid-cols-4 grid-rows-4 rounded-sm shadow-md md:grid-rows-none md:grid-flow-col-dense text-primary max-h-[550px] md:max-h-fit">
        {strength.map((item, id) => (
          <div
            style={{ backgroundColor: `${item.bgColor}` }}
            className={`flex flex-col gap-3 justify-center items-center p-5 ${item.styles} h-full`}
            key={id}
          >
            <div className="relative h-14 min-h-14 w-14 md:w-20 md:h-20">
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
      </div>
    </section>
  );
};

export default OurStrength;
