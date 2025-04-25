import Image from "next/image";
export const InternationalTies = ({ countries }) => {
  return (
    <div className="block space-y-7">
      <div className="p-8 space-y-4 rounded-lg shadow-lg bg-secondary md:space-y-6 ">
        <h4 className="text-lg font-semibold tracking-wide sm:text-xl lg:text-2xl">
          {countries.mainTitle}
        </h4>
        <p className="para">{countries.para1}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 place-content-center md:grid-cols-4 lg:grid-cols-3 gap-x-2 gap-y-5 xl:grid-cols-4">
        {countries.logos.map((l, id) => (
          <div
            className="relative w-full max-w-[140px] md:max-w-[180px] xl:max-w-[140px] xl:min-h-[90px] overflow-hidden duration-300 h-full min-h-[90px] md:min-h-[120px]"
            key={id}
          >
            <Image
              alt={"national flag"}
              src={l.logo}
              fill
              className="object-fill object-center rounded-lg"
              quality={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
