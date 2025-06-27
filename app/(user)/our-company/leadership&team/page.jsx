import OtherPageHero from "@/components/OtherPageHero";
import Image from "next/image";

const Home = () => {
  return (
    <section className="w-full h-full font-RobotoSlab">
      <OtherPageHero title={"Leadership"} imgSrc={"/hero_2.jpg"} para={""} />
      <div className="w-full px-6 py-10 space-y-12 sm:py-12 sm:px-10 lg:px-16 xl:px-64 font-RobotoSlab">
        <div className="space-y-4 md:space-y-6 rounded-lg my-5">
          <h4 className="w-full text-3xl font-medium tracking-wide capitalize md:text-[44px]">
            Our Leadership
          </h4>
          <h5 className="w-full text-lg capitalize md:text-xl font-medium tracking-wide">
            Mrs. Vanessa Bagdy & Mr. Raaj Bagdy
          </h5>
          <p className="para">
            At the heart of Ashok Mineral Enterprises is a leadership duo that embodies balance and synergy—like Yin and Yang, they complement each other perfectly. Together, they form the perfect balance—Vanessa, the Yin, brings fresh perspectives, innovation, and strategic vision, while Raaj, the Yang, provides wisdom, stability, and a wealth of experience.
          </p>
        </div>
        <div className="flex flex-col justify-between w-full gap-5 md:flex-row relative pt-10">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
            <p className="para text-justify">
              <span className="font-bold">Vanessa Bagdy</span>, an engineering graduate from CEG, Anna University, Chennai, also holds a Master’s in Management from ESSEC Business School, Paris, where she was awarded the prestigious Charpak Scholarship (a merit-based scholarship by the French government for outstanding students). She honed her expertise at global corporations like Estée Lauder and Faurecia (a PSG-owned company) in France before returning to lead her family business. Initially learning about minerals on the job, she has now developed a deep passion for the industry and is committed to driving the company’s legacy forward.
            </p>
            <p className="para text-justify">
              <span className="font-bold">Raaj Bagdy</span>, with over 45 years of experience, has been the guiding force behind Ashok Mineral Enterprises. Known for his deep industry knowledge, he is often called a living encyclopedia of minerals. His leadership is rooted in ethical business practices, diligence, and an unwavering commitment to excellence. A true workhorse, he has never missed a day at work and remains as passionate as ever about making a difference in the industry.
            </p>
          </div>
          <div className="w-full md:w-1/2 md:sticky md:top-5 h-full">
            <div className="relative w-full h-96 md:h-[335px] lg:h-[425px] overflow-hidden">
              <Image alt="founder image" src={"/founders.png"} fill loading="lazy" className="object-contain object-center" />
            </div>
          </div>
        </div>
        <div className="space-y-6 !mt-28">
          <div className="space-y-4 md:space-y-6 rounded-lg my-5">
            <h4 className="w-full text-3xl font-medium tracking-wide capitalize md:text-[44px]">
              Our Team
            </h4>
            <p className="para">
              At Ashok Mineral Enterprises, our team of 25 young and dynamic executives is dedicated to putting customers first. We go above and beyond to meet customer needs, demonstrating a strong work ethic and a willingness to go the extra mile to ensure satisfaction. We believe that our growth is intrinsically linked to our customer&apos;s success, and we always keep the big picture in mind, focusing on building long-term relationships.
            </p>
          </div>
          <div className="w-full max-w-6xl mx-auto h-full flex flex-col-reverse justify-between gap-5 md:flex-row relative pt-10">
            <div className="relative w-full h-56 md:h-[335px] lg:h-[310px] overflow-hidden">
              <Image alt="founder image" src={"/teamashok1.jpg"} fill loading="lazy" className="object-contain object-center" />
            </div>
            <div className="relative w-full h-56 md:h-[335px] lg:h-[310px] overflow-hidden">
              <Image alt="founder image" src={"/teamashok2.jpg"} fill loading="lazy" className="object-contain object-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
