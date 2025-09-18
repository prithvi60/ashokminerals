import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import Image from "next/image";
import { Button } from "@heroui/button";
import { FaRegClock } from "react-icons/fa6";
import { FlipProductsCard } from "./FlipProductsCard";

const Blog = async ({ posts }) => {
  return (
    <section className="w-full h-full px-6 py-10 space-y-8 font-RobotoSlab sm:px-10 lg:px-16 xl:px-64 ">
      {posts.length > 0 && (
        <div className="w-full h-full">
          <FlipProductsCard data={posts} type={"blog"} />
        </div>
      )}
    </section>
  );
};

export default Blog;

