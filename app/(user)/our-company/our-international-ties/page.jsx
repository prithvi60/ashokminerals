import { InternationalTies } from "@/components/InternationalTies";
import OtherPageHero from "@/components/OtherPageHero";
import { exportCountries, importCountries } from "@/libs/data";

const Home = () => {
  return (
    <section className="w-full h-full font-RobotoSlab">
      <OtherPageHero
        title={"Our International Ties"}
        imgSrc={"/hero_1.jpg"}
        para={
          "We have achieved self-sealing status, which allows us to perform container stuffing at our own factory. This capability enables us to bypass the Container Freight Station (CFS), saving valuable time and effort for our clients, ensuring faster delivery and greater efficiency in our operations."
        }
        para2={
          "We have achieved self-sealing status, which allows us to perform container stuffing at our own factory."
        }
      />
      <div className="flex flex-col gap-20 px-6 py-5 lg:gap-8 lg:flex-row sm:py-12 sm:px-10 lg:px-16 xl:px-64">
        <InternationalTies countries={importCountries} />
        <InternationalTies countries={exportCountries} />
      </div>
    </section>
  );
};

export default Home;
