"use client";
import { allProducts } from "@/libs/data";
import Image from "next/image";
import { useParams } from "next/navigation";

export const ProductSpecification = () => {
  const { productName } = useParams();

  const product = allProducts.filter(
    (val) => val.productName === productName.replace(/_/g, " ")
  );

  return (
    <section className="block px-6 py-10 space-y-6 sm:space-y-10 font-RobotoSlab sm:py-12 sm:px-10 lg:px-64">
      <h3 className="text-2xl font-bold tracking-wider capitalize sm:text-3xl lg:text-4xl">
        {product[0].productName.replace(/_/g, " ")}
      </h3>
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="relative w-full h-56 overflow-hidden sm:h-96 sm:basis-1/2">
          <Image
            alt={product[0].productName.replace(/_/g, " ")}
            src={product[0].imgSrc}
            fill
            className="object-cover object-top rounded-md"
          />
        </div>
        <p className="text-base font-normal font-RobotoSlab sm:basis-1/2">
          {product[0].desc}
        </p>
      </div>
    </section>
  );
};
