import Image from "next/image";
import Link from "next/link";

export const ThankYouComponent = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen p-10 mb-10 space-y-6 sm:px-20 xl:px-64 sm:py-16 xl:py-28 font-EbGaramond bg-primary">
      <h3 className="text-3xl font-semibold text-center md:text-6xl">
        <div className="relative mx-auto h-14 w-14 md:h-28 md:w-28">
          <Image
            src={"https://ik.imagekit.io/webibee/Webibee/thumbs-up.gif?updatedAt=1735894426371"}
            fill
            title="thumbs up"
            alt="thumbs up"
            className="object-contain -mt-2"
            unoptimized
          />
        </div>
        Thank You !
      </h3>
      <p className="w-full text-lg text-center md:text-2xl font-RobotoSlab">
        We&apos;ve received your submission.
      </p>
      <Link
        title="back to home"
        href={"/"}
        className="mx-auto w-max"
      >
        <h4
          className={`text-base md:text-lg text-white font-RobotoSlab bg-warning px-8 py-2 md:py-4 rounded-md hover:bg-warning/75`}
        >
          Go Back To Home
        </h4>

      </Link>
    </section>
  );
};
