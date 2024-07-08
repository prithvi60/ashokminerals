import OtherPageHero from "@/components/OtherPageHero";

const Home = () => {
  return (
    <section className="w-full h-full font-RobotoSlab">
      <OtherPageHero title={"Our Team"} imgSrc={"/hero_3.jpg"} />
      <p className="w-full px-6 py-10 text-sm font-normal sm:py-14 sm:px-10 lg:px-16 xl:px-40 sm:text-lg">
        At Ashok Mineral Enterprises, our team of 25 young and dynamic
        executives is dedicated to putting customers first. We go above and
        beyond to meet customer needs, demonstrating a strong work ethic and a
        willingness to go the extra mile to ensure satisfaction. We believe that
        our growth is intrinsically linked to our customer&apos;s success, and
        we always keep the big picture in mind, focusing on building long-term
        relationships.
      </p>
    </section>
  );
};

export default Home;
