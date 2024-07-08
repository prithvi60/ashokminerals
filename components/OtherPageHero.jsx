import Image from "next/image";

const OtherPageHero = ({title,imgSrc}) => {
  return (
    <section className="w-full h-full">
      <div className="relative w-full h-[30dvh] sm:h-[50dvh]">
        <Image
          alt=""
          src={imgSrc}
          fill
          className="object-cover object-center"
        />
        <h3 className="absolute bottom-0 p-3 text-2xl font-bold tracking-wider capitalize rounded-md font-RobotoSlab sm:text-5xl lg:text-6xl text-primary bg-warning/90 left-6 sm:left-10 lg:left-16 xl:left-40">
          {title}
        </h3>
      </div>
    </section>
  );
};

export default OtherPageHero;
