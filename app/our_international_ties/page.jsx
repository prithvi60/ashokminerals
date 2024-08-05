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
      <div className="flex flex-col items-center gap-4 px-6 py-5 md:gap-8 md:flex-row sm:py-12 sm:px-10 lg:px-16">
        <InternationalTies importCountries={importCountries} />
        <InternationalTies importCountries={exportCountries} />
      </div>
    </section>
  );
};

export default Home;
