"use client"

import { FlipProductsCard } from "./FlipProductsCard";

export const MarketShowcase = ({ markets }) => {
  return (
    <section className="block px-6 py-10 space-y-8 md:space-y-10 font-RobotoSlab sm:py-12 sm:px-10 lg:px-16 xl:px-64">
      {markets.length > 0 && (
        <div className="w-full h-full">
          <FlipProductsCard data={markets} type={"markets"} />
        </div>
      )}
    </section>
  );
};
