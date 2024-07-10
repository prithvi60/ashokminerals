import OtherPageHero from "@/components/OtherPageHero";
import { certifications } from "@/libs/data";
import Image from "next/image";

const Home = () => {
  return (
    <section className="w-full h-full font-RobotoSlab">
      <OtherPageHero title={"Our Certifications"} imgSrc={"/hero_3.jpg"} />
      <div className="px-6 py-10 sm:py-14 sm:px-10 lg:px-16 xl:px-40">
        <p className="w-full text-sm font-normal sm:text-lg">
          We hold important certifications that underscore our commitment to
          quality and security:
        </p>
        <div className="block pt-10 space-y-3 md:space-y-5">
          {certifications.map((item, id) => (
            <div
              key={id}
              className="flex flex-col items-center gap-6 md:flex-row md:gap-3 group"
            >
              <div className="relative w-16 h-16 overflow-hidden transition-all duration-300 ease-linear md:basis-[15%] group-hover:scale-105 ">
                <Image
                  alt={item.altTxt}
                  src={item.imgSrc}
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-base font-medium capitalize md:basis-[85%] sm:text-lg ">
                {item.abbr}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
