import { Contact } from "./Contact";

export const ContactForm = () => {
  return (
    <section
      className="relative w-full h-full space-y-10 md:h-auto font-RobotoSlab"
      id="contact"
    >
      <div className="h-full px-6 py-10 space-y-10 bg-secondary sm:py-12 sm:px-10 lg:px-16 xl:px-64 md:space-y-0 relative">
        <h2 className="relative block w-full text-2xl font-medium tracking-wide md:hidden sm:text-3xl lg:text-5xl">
          Contact us
        </h2>
        <div className="flex flex-col-reverse justify-center gap-6 lg:gap-12 md:flex-row">
          {/* contact details */}
          <div className="flex flex-col items-start w-full h-auto gap-10 mt-6 md:1/2 lg:w-3/5">
            <div className="block space-y-6">
              <h3 className="relative hidden w-full text-2xl font-medium tracking-wide sm:text-3xl lg:text-5xl md:block">
                Contact us
              </h3>
              <p className="para font-Formular">
                Get in touch with us today through email, phone, or by filling
                out the form, and let us show you how Ashok Mineral enterprises
                can give you quality industrial minerals.
              </p>
              <p
                className="underline underline-offset-4 para hover:text-warning w-max"
              // onClick={() => console.log("logged")}
              >
                contact@ashokminerals.com
              </p>
              <p className="para hover:text-warning w-max">
                +91-44-24512581/82/83
              </p>
            </div>
            <div className="block space-y-10">
              <div className="block w-full space-y-4">
                <h3 className="text-xl font-medium tracking-wide capitalize sm:text-2xl">
                  Customer Support
                </h3>
                <p className="para">
                  Our committed support team is available 24/7 to assist with
                  any questions or concerns.
                </p>
                <p className="para">
                  Available on whatsapp or calls -{" "}
                  <span className="hover:text-warning">+91 98408 99343</span>
                </p>
              </div>
              <div className="block w-full space-y-4">
                <h3 className="text-xl font-medium tracking-wide capitalize sm:text-2xl">
                  Sales & other Enquiries
                </h3>
                <p className="para">
                  For any media inquiries or press-related questions, we invite
                  you to reach out to us at{" "}
                  <a
                    href="mailto:vanessa@ashokminerals.com"
                    className="mx-1 font-semibold hover:text-warning"
                  >
                    marketing@ashokminerals.com
                  </a>
                  . If you have marketing-related inquiries, please connect with
                  us at
                  <a
                    href="mailto:vanessa@ashokminerals.com"
                    className="mx-1 font-semibold hover:text-warning"
                  >
                    vanessa@ashokminerals.com
                  </a>
                  . <br />
                  We look forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="w-full h-full px-4 rounded-md shadow-md bg-primary py-7 md:1/2 lg:w-2/5 md:sticky md:top-24">
            <Contact />
          </div>
        </div>
      </div>
      {/* location map */}
      <div className="flex flex-col w-full h-full gap-8 px-6 py-10 md:gap-6 xl:gap-10 sm:py-12 sm:px-10 lg:px-16 xl:px-64 md:flex-row ">
        <div className="w-full h-[380px] md:h-[430px] lg:h-[480px] xl:h-[520px] md:w-3/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.882871157884!2d80.2585246!3d12.9737247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d43de4e88cb%3A0x987781b6095c4a43!2sAshok%20Mineral%20Enterprises!5e0!3m2!1sen!2sin!4v1720184013835!5m2!1sen!2sin"
            width={"100%"}
            height={"100%"}
            style={{ border: 0 }}
            allowFullScreen
            loading={"lazy"}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mb-8 space-y-3 md:w-2/5">
          <h3 className="text-xl font-medium tracking-wide capitalize font-RobotoSlab md:text-xl">
            our Office location Details
          </h3>
          <p className="text-2xl font-medium tracking-wide !leading-snug md:text-2xl xl:text-3xl">
            Connecting Near and Far
          </p>
          <div className="text-lg font-normal font-Formular tracking-widest">
            Ashok Mineral Enterprises
            <br />
            <br />
            <span className="font-semibold text-warning tracking-widest">
              {" "}
              Primary Manufacturing Unit & Warehouse :
            </span>
            <br /> F 15 & F86, Sipcot industrial complex,
            <br /> Gummidipoondi - 601201.
            <br />
          </div>
          <div className="text-lg font-normal font-Formular tracking-widest">
            <span className="font-semibold text-warning tracking-widest">
              {" "}
              Office:
            </span>
            <br /> 2A, first street, Karpagambal nagar,
            <br /> Kottivakkam,
            <br /> Chennai - 600041.
            <br />
            <br />
            <span className="font-semibold">GST : 33AAPB8321M1Z0</span>
          </div>
        </div>
      </div>
    </section>
  );
};
