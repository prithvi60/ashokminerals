import { AccordionComponent } from "@/components/Accordion";
import OtherPageHero from "@/components/OtherPageHero";
import { manufacturing } from "@/libs/data";

const Home = () => {
  return (
    <section>
      <OtherPageHero title={"Our Manufacturing Setup"} imgSrc={"/hero_2.jpg"} para={manufacturing.note} />
      <div className="block px-6 py-10 space-y-6 sm:space-y-10 font-RobotoSlab sm:py-12 sm:px-10 lg:px-16 xl:px-64">
        <div>
          {manufacturing.lists.map((list, idx) => (
            <AccordionComponent data={manufacturing.lists} list={list} key={idx} idx={idx} />
          ))}
        </div>
        <p className="text-base font-normal sm:text-lg">
          {manufacturing.para}
        </p>
      </div>
    </section>
  );
};

export default Home;
