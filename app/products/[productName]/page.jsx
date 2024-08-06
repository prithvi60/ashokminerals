import OtherPageHero from "@/components/OtherPageHero";

const Home = () => {
  return (
    <section>
      <OtherPageHero title={"Products"} imgSrc={"/hero_2.jpg"} />
      <div className="flex items-center text-xl justify-center w-full h-[30vh] font-semibold font-RobotoSlab">
        product specifications
      </div>
    </section>
  );
};

export default Home;
