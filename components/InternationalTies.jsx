import Image from "next/image";
export const InternationalTies = ({ importCountries }) => {
  return (
    <div className="block space-y-7">
      <div className="p-8 space-y-4 rounded-lg md:space-y-6 bg-black/10">
        <h4 className="text-lg font-semibold tracking-wide sm:text-xl lg:text-2xl">
          {importCountries.mainTitle}
        </h4>
        <p className="text-base font-normal">{importCountries.para1}</p>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="relative w-full max-w-[320px]  overflow-hidden duration-300 h-44 2xl:h-52">
          <Image
            alt={""}
            src={"/flag/thailand.png"}
            fill
            className="flex-1 object-fill aspect-[5/4]"
            quality={100}
          />
        </div>
        <div className="relative w-full max-w-[320px] overflow-hidden duration-300 h-44 2xl:h-52">
          <Image
            alt={""}
            src={"/flag/vietnam.png"}
            fill
            className="flex-1 object-fill aspect-[5/4]"
            quality={100}
          />
        </div>
        <div className="relative w-full max-w-[320px] overflow-hidden duration-300 h-44 2xl:h-52">
          <Image
            alt={""}
            src={"/flag/malaysia.png"}
            fill
            className="flex-1 object-fill aspect-[5/4]"
            quality={100}
          />
        </div>
        <h4 className="flex items-center justify-center text-base font-medium capitalize w-full max-w-[320px] h-44 2xl:h-52  flex-1 sm:text-lg bg-black/10 aspect-[5/4]">
          {"view more countries"}
        </h4>
      </div>
      {/* <p className="text-base font-normal">{importCountries.para2}</p> */}
    </div>
  );
};
