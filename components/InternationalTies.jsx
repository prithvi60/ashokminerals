import Image from "next/image";
export const InternationalTies = ({importCountries}) => {
  return (
    <div className="block px-6 py-10 space-y-8 sm:py-14 sm:px-10 lg:px-16 xl:px-40 md:space-y-10">
        <h4 className="text-lg font-semibold tracking-wide sm:text-xl lg:text-2xl">
          {importCountries.mainTitle}
        </h4>
        <p className="text-base font-normal">{importCountries.para1}</p>
        <div className="grid grid-cols-2 gap-5 md:gap-4 md:grid-cols-3 xl:grid-cols-4">
          {importCountries.logos.map((item, id) => (
            <div key={id} className="flex items-center gap-4 md:gap-3 group">
              <div className="relative overflow-hidden transition-all duration-300 ease-linear border-4 rounded-full w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-105 border-warning">
                <Image
                  alt={item.countryName}
                  src={item.logo}
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-base font-medium capitalize sm:text-lg">
                {item.countryName}
              </h4>
            </div>
          ))}
        </div>
        <p className="text-base font-normal">{importCountries.para2}</p>
      </div>
  )
}
