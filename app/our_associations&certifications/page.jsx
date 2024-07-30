import OtherPageHero from "@/components/OtherPageHero";
import { association } from "@/libs/data";
import Image from "next/image";

const Home = () => {
  return (
    <section className="w-full h-full font-RobotoSlab">
      <OtherPageHero title={"Our Associations"} imgSrc={"/hero_4.jpg"} />
      <div className="px-6 py-10 sm:py-14 sm:px-10 lg:px-16 xl:px-40">
        <p className="w-full text-sm font-normal sm:text-lg">
          Ashok Mineral Enterprises is proudly associated with several
          prestigious industry organizations, reflecting our commitment to
          excellence and industry standards:
        </p>
        <div className="flex flex-wrap items-center gap-5 pt-12 md:gap-6 xl:gap-10 md:justify-center">
          {association.map((item, id) => (
            <div key={id} className="flex items-center gap-6 md:gap-3 group">
              <div className="relative overflow-hidden transition-all duration-300 ease-linear border-b-2 rounded-lg sm:rounded-full sm:border-2 w-14 h-14 group-hover:scale-105 border-warning">
                <Image
                  alt={item.altTxt}
                  src={item.imgSrc}
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-base font-medium capitalize sm:text-lg">
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
