import { InternationalTies } from "@/components/InternationalTies";
import OtherPageHero from "@/components/OtherPageHero";
import { exportCountries, importCountries } from "@/libs/data";

const Home = () => {
  return (
    <section className="w-full h-full font-RobotoSlab">
      <OtherPageHero title={"Our International Ties"} imgSrc={"/hero_1.jpg"} />
      <InternationalTies importCountries={importCountries} />
      <InternationalTies importCountries={exportCountries} />
    </section>
  );
};

export default Home;
