import { AccordionComponent } from "@/components/Accordion";
import OtherPageHero from "@/components/OtherPageHero";
import { history } from "@/libs/data";

const Home = () => {

  return (
    <section>
      <OtherPageHero title={"Our History"} imgSrc={"/hero_1.jpg"} para={history.note} />
      <div className="block px-6 py-10 space-y-6 sm:space-y-10 font-RobotoSlab sm:py-12 sm:px-10 lg:px-16">
        <div>
          {history.lists.map((list, idx) => (
           <AccordionComponent list={list} key={idx} idx={idx} />
          ))}
        </div>
        <p className="text-base font-normal sm:text-lg">{history.para}</p>
      </div>
    </section>
  );
};

export default Home;


