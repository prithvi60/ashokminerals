import { strength } from "@/libs/data";
import Image from "next/image";

const OurStrength = () => {
  return (
    <section className="w-full h-full px-5 py-10 mx-auto space-y-10 sm:py-14 max-w-7xl font-RobotoSlab">
      <h3 className="relative w-full text-3xl text-zinc-600 font-light sm:text-4xl lg:text-6xl sm:w-4/5 mx-auto after:absolute after:content-[''] after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:h-1 after:rounded-sm after:w-24 after:bg-black/80 text-center">
        Our <strong className="font-bold text-black">Strength</strong>
      </h3>
      <div className="grid grid-cols-1 pt-10 md:grid-cols-2 gap-7">
        {strength.map((list, idx) => (
          <div className="block space-y-3 md:min-h-[360px]" key={idx}>
            <div className="relative h-14 w-14 md:w-20 md:h-20">
              <Image
                alt={list.title}
                src={list.src}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h4 className="text-lg font-semibold tracking-wide uppercase md:text-xl">
              {list.title}
            </h4>
            <p className="text-sm md:text-base text-zinc-500">{list.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurStrength;
