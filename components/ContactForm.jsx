"use client";
import { Input, Textarea } from "@nextui-org/input";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";

const lists = [
  "sample interest",
  "general enquiry",
  "supplier",
  "product of interest",
];

export const ContactForm = () => {
  return (
    <section className="relative w-full h-full space-y-10 md:h-auto font-RobotoSlab ">
      <div className="flex flex-col justify-center h-full gap-6 px-6 py-10 lg:gap-12 md:flex-row bg-black/5 sm:py-12 sm:px-10 lg:px-16">
        <div className="flex flex-col items-start justify-between w-full h-auto gap-5 mt-6 md:1/2 lg:w-3/5">
          <div className="block space-y-6">
            <h3 className="relative w-full text-2xl font-semibold sm:text-3xl lg:text-5xl">
              Contact us
            </h3>
            <p className="text-base font-normal">
              Email, call or complete the form to learn how Ashok minerals
              support you
            </p>
            <p
              className="text-base font-medium underline underline-offset-4 hover:text-warning w-max"
              onClick={() => console.log("logged")}
            >
              contact@ashokminerals.com
            </p>
            <p className="text-base font-medium hover:text-warning w-max">
              +91-44-24512581/82/83
            </p>
          </div>
          <div className="flex flex-wrap items-start gap-8 xl:flex-nowrap">
            <div className="block w-full space-y-4 xl:w-3/5">
              <h4 className="text-lg font-semibold tracking-wide capitalize sm:text-xl">
                Customer Support
              </h4>
              <p className="text-base font-normal">
                Our support team is available around the clock to address any
                concerns or queries you may have
              </p>
            </div>
            <div className="block w-full space-y-4 xl:w-3/5">
              <h4 className="text-lg font-semibold tracking-wide capitalize sm:text-xl">
                Feedback & Suggestions
              </h4>
              <p className="text-base font-normal">
                We value your feedback and are continuously working to improve
                Snappy. Your input is crucial in shaping the future of ashok
                minerals.
              </p>
            </div>
            <div className="block w-full space-y-4 xl:w-3/5">
              <h4 className="text-lg font-semibold tracking-wide capitalize sm:text-xl">
                Sales & other Enquiries
              </h4>
              <p className="text-base font-normal">
                For media-related questions or press inquiries, please contact
                us at{" "}
                <span className="mx-1 font-semibold hover:text-warning">
                  Vanessa@ashokminerals.com
                </span>{" "}
                for marketing related inquiries, please contact us at
                <span className="mx-1 font-semibold hover:text-warning">
                  marketing@ashokminerals.com
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-auto px-4 space-y-5 rounded-md shadow-md bg-primary py-7 md:1/2 lg:w-2/5">
          <form
            // action="https://public.herotofu.com/v1/19317a90-2945-11ef-b910-172fda062bcc"
            method="post"
            acceptCharset="UTF-8"
            className="w-full h-auto space-y-8"
          >
            <h3 className="mb-12 text-lg font-semibold tracking-wide font-RobotoSlab md:text-xl xl:text-2xl">
              Let’s Get in touch to Explore business opportunities
            </h3>
            <Select
            aria-label="options"
              name="selecting options"
              isRequired
              size="lg"
              // label="How Can I Help You ?"
              // labelPlacement={"outside"}
              placeholder="How Can I Help You ?"
              radius="full"
              variant="faded"
              className="mt-8 max-w-ful"
              classNames={{
                label: "capitalize font-Poppins font-normal",
                trigger: "bg-black/5",
                value: "capitalize",
              }}
            >
              {lists.map((list, idx) => (
                <SelectItem classNames={{ base: "capitalize" }} key={idx}>
                  {list}
                </SelectItem>
              ))}
            </Select>
            <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
              <Input
                classNames={{
                  inputWrapper: "bg-black/5 font-RobotoSlab font-normal",
                }}
                name="firstName"
                isRequired
                size="lg"
                type="firstName"
                // label="First Name"
                // labelPlacement={"outside"}
                radius="full"
                variant="faded"
                placeholder="First Name"
                // endContent={
                //   <MdOutlineDriveFileRenameOutline className="flex-shrink-0 text-2xl opacity-50 text-black/80" />
                // }
              />
              <Input
                classNames={{
                  inputWrapper: "bg-black/5 font-RobotoSlab font-normal",
                }}
                name="lastName"
                isRequired
                size="lg"
                type="lastName"
                // label="Last Name"
                // labelPlacement={"outside"}
                placeholder="Last Name"
                radius="full"
                // color="secondary"
                variant="faded"
                // endContent={
                //   <MdOutlineDriveFileRenameOutline className="flex-shrink-0 text-2xl opacity-50 text-black/80" />
                // }
              />
              <Input
                classNames={{
                  inputWrapper: "bg-black/5 font-RobotoSlab font-normal",
                }}
                name="email"
                isRequired
                size="lg"
                type="email"
                // label="Email"
                // labelPlacement={"outside"}
                placeholder="Email"
                radius="full"
                variant="faded"
                // color="secondary"
                // endContent={
                //   <IoMailOutline className="flex-shrink-0 text-lg opacity-50 text-black/80" />
                // }
              />
              <Input
                classNames={{
                  inputWrapper: "bg-black/5 font-RobotoSlab font-normal",
                }}
                name="phone number"
                size="lg"
                type="text"
                // label="Phone Number"
                // labelPlacement={"outside"}
                placeholder="Phone No."
                radius="full"
                variant="faded"
                isRequired
                // color="secondary"
                // endContent={
                //   <FaPhoneAlt className="flex-shrink-0 text-lg opacity-50 text-black/80" />
                // }
              />
              <Input
                classNames={{
                  inputWrapper: "bg-black/5 font-RobotoSlab font-normal",
                }}
                name="company"
                isRequired
                size="lg"
                type="text"
                // label="Company"
                // labelPlacement={"outside"}
                placeholder="Company Information"
                radius="full"
                variant="faded"
                // color="secondary"
                className="md:col-span-2"
                // endContent={
                //   <HiOutlineBuildingOffice2 className="flex-shrink-0 text-lg opacity-50 text-black/80" />
                // }
              />
            </div>
            <Textarea
              classNames={{
                inputWrapper: "bg-black/5 font-RobotoSlab font-normal",
              }}
              name="comments"
              isRequired
              // label="Comments"
              // labelPlacement="outside"
              placeholder="Comments Please..."
              className="max-w-full"
              variant="faded"
              size="lg"
            />
            <div className="w-full h-full text-center">
              <Button
                color="warning"
                size="lg"
                radius="sm"
                className="px-6 font-semibold w-max text-primary md:px-8"
                role="button"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
          {/* <div className="space-y-1.5 text-center font-RobotoSlab">
            <h4 className="p-1 mx-auto text-sm font-semibold border-2 rounded-full w-max border-warning text-warning">
              OR
            </h4>
            <p className="text-base font-normal text-warning md:text-lg">
              Email Us:{" "}
              <span className="font-normal text-black">
                contact@ashokminerals.com
              </span>
            </p>
            <p className="text-base font-normal text-warning md:text-lg">
              Marketing :{" "}
              <span className="font-normal text-black">
                marketing@ashokminerals.com
              </span>
            </p>
            <p className="text-base font-normal text-warning md:text-lg">
              Sales & Other Enquiries :{" "}
              <span className="italic font-normal text-black">
                Vanessa@ashokminerals.com
              </span>
            </p>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col w-full h-full gap-8 px-6 py-10 md:gap-6 xl:gap-10 sm:py-12 sm:px-10 lg:px-16 md:flex-row ">
        <div className="w-full h-[380px] md:h-[430px] lg:h-[480px] xl:h-[520px] md:w-3/5 lg:w-3/4">
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
        <div className="mb-8 space-y-3 md:w-2/5 lg:w-1/4">
          <h3 className="text-lg font-medium tracking-wide capitalize font-RobotoSlab md:text-xl">
            our Office location Details
          </h3>
          <p className="text-xl font-semibold md:text-2xl xl:text-3xl">
            Connecting Near and Far
          </p>
          <address className="text-base font-normal font-RobotoSlab">
            Ashok Mineral Enterprises
            <br />
            <span className="font-semibold text-warning">
              {" "}
              Primary Manufacturing Unit & Warehouse :
            </span>
            <br /> F 15 & F86, Sipcot industrial complex,
            <br /> Gummidipoondi - 601201.
            <br />
            {/* <span className="font-semibold text-warning">Contact No - </span>
            +91-44-24512581/82/83
            <br /> */}
            <span className="font-semibold">
              GST : 33AAPB8321M1Z0
            </span>
          </address>
        </div>
      </div>
    </section>
  );
};
