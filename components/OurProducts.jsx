import { products } from "@/libs/data";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";

const OurProducts = () => {
  return (
    <section className="w-full h-full px-5 py-10 mx-auto space-y-10 sm:py-14 max-w-7xl font-RobotoSlab">
      <h3 className="relative w-full text-3xl text-zinc-600 font-light sm:text-4xl lg:text-6xl sm:w-4/5 mx-auto after:absolute after:content-[''] after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:h-1 after:rounded-sm after:w-24 after:bg-black/80 text-center">
        Our <strong className="font-bold text-black">Products</strong>
      </h3>
      <div className="grid w-full h-full grid-cols-2 gap-5 md:gap-10 xl:gap-20 font-RobotoSlab md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-content-center">
        {products.map((item, index) => (
          <Card shadow="sm" key={index} className="hover:scale-110 md:min-w-64 max-w-80 min-h-64">
            <CardBody className="p-0 overflow-hidden">
              <Image
                height={480}
                width={280}
                alt={item.title}
                className="w-full object-cover h-[240px]"
                src={item.src}
                quality={90}
              />
            </CardBody>
            <CardFooter className="capitalize text-small">
              <h4 className="">{item.title}</h4>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
