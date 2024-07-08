
import Blog from "@/components/Blog";
import OtherPageHero from "@/components/OtherPageHero";
import { Button } from "@nextui-org/button";

export default function Home() {

  return (
    <main>
      <OtherPageHero title={"Blog"} imgSrc={"/hero_4.jpg"} />
      <Blog/>
    </main>
  );
}
