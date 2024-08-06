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
      <div className="px-6 py-10 space-y-5 sm:py-12 sm:px-10 lg:px-16">
        <h4 className="text-lg font-semibold tracking-wide capitalize sm:text-xl lg:text-2xl">
          our Associations
        </h4>
        {/* <p className="w-full text-sm font-normal sm:text-lg">
          We hold important certifications that underscore our commitment to
          quality and security:
        </p> */}
        <div className="flex items-center gap-5 pt-6 overflow-x-auto md:gap-6 hideScroll">
          {association.map((item, id) => (
            <div
              key={id}
              className="flex flex-col justify-center items-center gap-3 group bg-black/10 p-3.5 w-full h-full  min-w-[250px] min-h-[250px]"
            >
              <div className="relative overflow-hidden transition-all duration-300 ease-linear rounded-lg w-28 h-28 sm:rounded-full group-hover:scale-105">
                <Image
                  alt={item.altTxt}
                  src={item.imgSrc}
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="w-full text-lg font-medium text-center capitalize md:text-xl group-hover:text-warning">
                {item.abbr}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 py-10 space-y-5 sm:py-14 sm:px-10 lg:px-16">
        <h4 className="text-lg font-semibold tracking-wide capitalize sm:text-xl lg:text-2xl">
          our certifications
        </h4>
        <div className="flex flex-col items-center gap-5 pt-6 md:flex-row md:gap-6">
          {certifications.map((item, id) => (
            <div
              key={id}
              className="flex flex-col justify-center items-center gap-3 group bg-black/10 p-3.5 w-[250px] h-[250px]"
            >
              <div className="relative overflow-hidden transition-all duration-300 ease-linear rounded-lg w-28 h-28 sm:rounded-full group-hover:scale-105">
                <Image
                  alt={item.altTxt}
                  src={item.imgSrc}
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="w-full text-lg font-medium text-center capitalize md:text-xl group-hover:text-warning">
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
