import Image from "next/image";
export const InternationalTies = ({ importCountries }) => {
  return (
    <div className="block px-6 py-5 space-y-5 sm:py-12 sm:px-10 lg:px-16 md:space-y-7">
      <div className="p-8 space-y-4 rounded-lg md:space-y-6 bg-black/10">
        <h4 className="text-lg font-semibold tracking-wide sm:text-xl lg:text-2xl">
          {importCountries.mainTitle}
        </h4>
        <p className="text-base font-normal">{importCountries.para1}</p>
      </div>
      <div className="flex flex-wrap items-center gap-5">
        {/* {importCountries.logos.map((item, id) => ( */}
        {/* <div  className="block"> */}
        <div className="relative w-full max-w-[300px] overflow-hidden duration-300 h-40">
          <Image
            alt={""}
            src={"/flag/uae1.png"}
            fill
            className="object-cover"
            quality={100}
          />
        </div>
        <div className="relative w-full max-w-[300px] overflow-hidden duration-300 h-40">
          <Image
            alt={""}
            src={"/flag/uae1.png"}
            fill
            className="object-cover"
            quality={100}
          />
        </div>
        <div className="relative w-full max-w-[300px] overflow-hidden duration-300 h-40">
          <Image
            alt={""}
            src={"/flag/uae1.png"}
            fill
            className="object-cover"
            quality={100}
          />
        </div>
        <h4 className="flex items-center justify-center text-base font-medium capitalize w-full max-w-[300px] h-40 sm:text-lg bg-black/10">
          {"view more countries"}
        </h4>
        
        {/* </div> */}
        {/* ))} */}
      </div>
      {/* <p className="text-base font-normal">{importCountries.para2}</p> */}
    </div>
  );
};
