import OtherPageHero from "@/components/OtherPageHero";
import { association, certifications } from "@/libs/data";
import Image from "next/image";

const Home = () => {
  return (
    <section className="w-full h-full font-RobotoSlab">
      <OtherPageHero
        title={"Our Associations & Certifications"}
        imgSrc={"/hero_4.jpg"}
        para={
          "Ashok Mineral Enterprises is proudly associated with several prestigious industry organizations,   reflecting our commitment to excellence and industry standards We hold important certifications that underscore our commitment to quality and security"
        }
      />
      {/* associations */}
      <div className="px-6 py-10 space-y-5 sm:py-12 sm:px-10 lg:px-16 xl:px-64">
        <h2 className="text-lg font-medium tracking-wide capitalize sm:text-xl lg:text-2xl">
          our Associations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5 pt-6 xl:gap-6 w-full">
          {association.map((item, id) => (
            <div
              key={id}
              className="flex flex-col justify-center items-center gap-3 group bg-secondary p-3.5 h-full min-h-[250px] shadow-lg rounded-lg"
            >
              <div className="relative overflow-hidden transition-all duration-300 ease-linear rounded-lg w-28 h-28 sm:rounded-full group-hover:scale-105">
                <Image
                  title={item.altTxt}
                  alt={item.altTxt}
                  src={item.imgSrc}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="w-full text-lg font-normal font-Formular text-center capitalize md:text-xl group-hover:text-warning tracking-widest !leading-snug">
                {item.abbr}
              </h3>
            </div>
          ))}
        </div>
      </div>
      {/* certifications */}
      <div className="px-6 py-10 space-y-5 sm:py-14 sm:px-10 lg:px-16 xl:px-64">
        <h3 className="text-lg font-medium tracking-wide capitalize sm:text-xl lg:text-2xl">
          our certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6 md:gap-6">
          {certifications.map((item, id) => (
            <div
              key={id}
              className="flex flex-col justify-center items-center gap-3 group bg-secondary p-3.5 min-h-[250px] shadow-lg rounded-lg"
            >
              <div className="relative overflow-hidden transition-all duration-300 ease-linear rounded-lg w-28 h-28 sm:rounded-full group-hover:scale-105">
                <Image
                  title={item.altTxt}
                  alt={item.altTxt}
                  src={item.imgSrc}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="w-full text-lg font-medium font-Formular text-center capitalize md:text-xl group-hover:text-warning tracking-widest !leading-snug">
                {item.abbr}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
