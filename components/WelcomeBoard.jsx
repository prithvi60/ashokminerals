import React from "react";

const WelcomeBoard = () => {
  return (
    <section className="w-full h-full px-5 py-10 mx-auto space-y-7 sm:py-14 max-w-7xl font-RobotoSlab">
      <h3 className="relative w-full text-3xl text-zinc-600 font-light sm:text-4xl lg:text-6xl sm:w-4/5 mx-auto after:absolute after:content-[''] after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:h-1 after:rounded-sm after:w-24 after:bg-black/80 text-center ">
        We Are{" "}
        <strong className="font-bold text-black">Leading Industrial Minerals Manufacturer & Supplier.</strong>
      </h3>
      <p className="w-full mx-auto text-base font-normal text-center sm:w-4/5 text-zinc-700">
        We are Mine Owners and the leading producer and supplier of Talc,
        Calcium Carbonate (both GCC & PCC), Quick Lime, Hydrated Lime, Dolomite,
        Feldspar, Aluminum Sulphate and other non metal Industrial Minerals and
        cater to wide range of Industries from Food, Pharma, Cosmetic, Home and
        Personal Care, Paint & Coating, Ink, Adhesives, Plastic Compounding,
        Rubber, Ceramic, Feed, Agriculture & so on. HTMC Group is at the
        forefront of driving growth and innovation in the mineral sector as one
        of the Top Manufacturers of Minerals in India.
      </p>
    </section>
  );
};

export default WelcomeBoard;
