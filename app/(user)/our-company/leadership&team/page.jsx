import OtherPageHero from "@/components/OtherPageHero";

const Home = () => {
  return (
    <section className="w-full h-full font-RobotoSlab">
      <OtherPageHero title={"Leadership"} imgSrc={"/hero_2.jpg"} para={""} />
      <div className="w-full px-6 py-10 space-y-12 sm:py-12 sm:px-10 lg:px-64 font-RobotoSlab">
        <div className="p-4 space-y-6 rounded-lg shadow-lg bg-secondary md:p-6">
          <h4 className="w-full text-2xl font-semibold tracking-wide capitalize sm:text-3xl">
            Leadership
          </h4>
          <p className="text-base font-normal">
            At the helm of Ashok Minerals is Mr. Raaj Bagdy, whose hard work and
            dedication have driven the company’s success. Known by many as an
            encyclopedia of minerals, his extensive years in the industry have
            endowed him with unparalleled knowledge and expertise. His passion
            for minerals and unwavering commitment have steered the company
            towards steady growth. Joining Mr. Bagdy at the helm is his
            daughter, Vanessa Bagdy. An engineering graduate from Anna
            University, College of Engineering, she further honed her management
            skills at ESSEC Business School in Paris. Fluent in English, Tamil,
            Hindi, and French, Vanessa is a multilingual leader who embraces
            diverse cultures and strives to infuse diversity and robustness into
            the company.
          </p>
        </div>
        <div className="p-4 space-y-6 rounded-lg shadow-lg bg-secondary md:p-6">
          <h4 className="w-full text-2xl font-semibold tracking-wide capitalize sm:text-3xl">
            Team
          </h4>
          <p className="text-base font-normal">
            At Ashok Mineral Enterprises, our team of 25 young and dynamic
            executives is dedicated to putting customers first. We go above and
            beyond to meet customer needs, demonstrating a strong work ethic and
            a willingness to go the extra mile to ensure satisfaction. We
            believe that our growth is intrinsically linked to our
            customer&apos;s success, and we always keep the big picture in mind,
            focusing on building long-term relationships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
