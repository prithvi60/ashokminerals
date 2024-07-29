import { products, productSpecimen } from "@/libs/data";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { LuArrowDownRightFromCircle } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

const OurProducts = () => {
  return (
    <section className="w-full h-full px-6 py-10 space-y-24 sm:px-10 lg:px-16 sm:py-12 font-RobotoSlab">
      <h3 className="relative w-full text-2xl font-semibold sm:text-3xl lg:text-5xl">
        Our Products
      </h3>
      <div className="grid w-full h-full grid-cols-1 gap-x-10 gap-y-24 sm:grid-cols-2 md:grid-cols-3 md:gap-10 lg:gap-6 xl:gap-14 font-RobotoSlab place-content-center place-items-center">
        {/* {products.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            className="hover:scale-110 md:min-w-64 max-w-80 sm:h-56 h-44"
          >
            <CardBody className="p-0 overflow-hidden">
              <Image
                height={480}
                width={280}
                alt={item.title}
                className="w-full object-cover h-[180px] sm:h-[240px]"
                src={item.src}
                quality={90}
              />
            </CardBody>
            <CardFooter className="font-semibold capitalize text-small bg-warning text-primary">
              <h4 className="">{item.title}</h4>
            </CardFooter>
          </Card>
        ))} */}
        {productSpecimen.map((item, id) => (
          <div
            className="relative w-full rounded-md shadow-xl cursor-pointer sm:h-56 h-44 bg-black/5 group"
            key={id}
          >
            <Image
              height={220}
              width={220}
              alt={item.title}
              className="absolute left-1/2 -translate-x-1/2 object-contain -top-12 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] group-hover:scale-110 transition-all duration-300 ease-linear"
              src={item.src}
              quality={100}
            />
            <div className="absolute text-lg font-semibold tracking-wider capitalize -translate-x-1/2 bottom-10 sm:text-xl lg:text-2xl left-1/2 group-hover:text-warning">
              <h4 className="">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full h-full mt-6 md:justify-end">
        <Link
          href={"./products"}
          title="products"
          className="flex items-center gap-2 text-lg transition-colors ease-linear w-max lg:text-xl hover:underline underline-offset-4 hover:text-warning duration-400"
        >
          <h4>view more products</h4>
          <span>
            <LuArrowDownRightFromCircle className="text-base -rotate-90 sm:text-lg lg:text-xl" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default OurProducts;
