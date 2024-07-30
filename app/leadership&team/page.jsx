import OtherPageHero from "@/components/OtherPageHero";

const Home = () => {
  return (
    <section className="w-full h-full font-RobotoSlab">
      <OtherPageHero title={"Leadership"} imgSrc={"/hero_2.jpg"} />
      <p className="w-full px-6 py-10 text-sm font-normal sm:py-14 sm:px-10 lg:px-16 xl:px-40 sm:text-lg">
        At the helm of Ashok Minerals is Mr. Raaj Bagdy, whose hard work and
        dedication have driven the company’s success. Known by many as an
        encyclopedia of minerals, his extensive years in the industry have
        endowed him with unparalleled knowledge and expertise. His passion for
        minerals and unwavering commitment have steered the company towards
        steady growth.
        <br />
        <br />
        Joining Mr. Bagdy at the helm is his daughter, Vanessa Bagdy. An
        engineering graduate from Anna University, College of Engineering, she
        further honed her management skills at ESSEC Business School in Paris.
        Fluent in English, Tamil, Hindi, and French, Vanessa is a multilingual
        leader who embraces diverse cultures and strives to infuse diversity and
        robustness into the company.
      </p>
    </section>
  );
};

export default Home;
