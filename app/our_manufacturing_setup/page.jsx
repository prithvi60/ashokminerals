import OtherPageHero from "@/components/OtherPageHero";
import { manufacturing } from "@/libs/data";
import { GiMinerals } from "react-icons/gi";
const Home = () => {
  return (
    <section>
      <OtherPageHero title={"Our Manufacturing Setup"} imgSrc={"/hero_2.jpg"} />
      <div className="block px-6 py-10 space-y-6 sm:space-y-10 font-RobotoSlab sm:py-14 sm:px-10 lg:px-16 xl:px-40">
        <h3 className="text-xl font-semibold tracking-wider capitalize sm:text-2xl">
          {manufacturing.note}
        </h3>
        <ul className="space-y-6 sm:space-8">
          {manufacturing.lists.map((list, idx) => (
            <li className="space-y-4" key={idx}>
              <div className="flex items-center gap-4 text-lg font-semibold tracking-wide capitalize md:gap-1 sm:text-xl">
                <GiMinerals className="text-2xl sm:text-4xl text-warning" />
                <h4 className="mt-1">{list.title}</h4>
              </div>
              <p className="text-base font-normal sm:text-lg ms-14">
                {list.desc}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-base font-normal sm:text-lg ms-8">
          {manufacturing.para}
        </p>
      </div>
    </section>
  );
};

export default Home;
