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
    <section className="relative w-full h-full px-6 py-10 space-y-10 md:h-auto sm:py-14 sm:px-10 lg:px-16 xl:px-40 ">
      <h3 className="relative w-full text-3xl text-warning font-semibold sm:text-4xl lg:text-6xl sm:w-4/5 mx-auto after:absolute after:content-[''] after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:h-1 after:rounded-sm after:w-24 after:bg-black/80 text-center capitalize">
        Contact <strong className="font-bold text-black">us</strong>
      </h3>
      <div className="flex flex-col justify-center gap-2 md:ga-4 lg:gap-8 md:flex-row">
        <div className="w-full h-auto space-y-5 rounded-md py-7 md:w-1/2">
          <form
            // action="https://public.herotofu.com/v1/19317a90-2945-11ef-b910-172fda062bcc"
            method="post"
            acceptCharset="UTF-8"
            className="w-full h-auto space-y-4"
          >
            <h3 className="mb-12 text-lg font-semibold tracking-wide font-RobotoSlab md:text-xl xl:text-2xl">
              Let’s Get in touch to Explore business opportunities
            </h3>
            <Select
              name="selecting options"
              isRequired
              size="lg"
              label="How Can I Help You ?"
              labelPlacement={"outside"}
              placeholder="How Can I Help You ?"
              radius="full"
              variant="faded"
              className="mt-5 max-w-ful"
              classNames={{
                label: "capitalize font-Poppins font-normal",
                trigger: "bg-primary",
                value: "capitalize",
              }}
            >
              {lists.map((list, idx) => (
                <SelectItem classNames={{ base: "capitalize" }} key={idx}>
                  {list}
                </SelectItem>
              ))}
            </Select>
            <div className="grid grid-cols-1 gap-6 md:gap-4 md:grid-cols-2">
              <Input
                classNames={{
                  inputWrapper: "bg-primary font-RobotoSlab font-normal",
                }}
                name="firstName"
                isRequired
                size="lg"
                type="firstName"
                label="First Name"
                labelPlacement={"outside"}
                radius="full"
                variant="faded"
                placeholder="Enter Your First Name"
                endContent={
                  <MdOutlineDriveFileRenameOutline className="flex-shrink-0 text-2xl opacity-50 text-black/80" />
                }
              />
              <Input
                classNames={{
                  inputWrapper: "bg-primary font-RobotoSlab font-normal",
                }}
                name="lastName"
                isRequired
                size="lg"
                type="lastName"
                label="Last Name"
                labelPlacement={"outside"}
                placeholder="Enter Your Last Name"
                radius="full"
                // color="secondary"
                variant="faded"
                endContent={
                  <MdOutlineDriveFileRenameOutline className="flex-shrink-0 text-2xl opacity-50 text-black/80" />
                }
              />
              <Input
                classNames={{
                  inputWrapper: "bg-primary font-RobotoSlab font-normal",
                }}
                name="email"
                isRequired
                size="lg"
                type="email"
                label="Email"
                labelPlacement={"outside"}
                placeholder="Enter Your Email"
                radius="full"
                variant="faded"
                // color="secondary"
                endContent={
                  <IoMailOutline className="flex-shrink-0 text-lg opacity-50 text-black/80" />
                }
              />
              <Input
                classNames={{
                  inputWrapper: "bg-primary font-RobotoSlab font-normal",
                }}
                name="phone number"
                size="lg"
                type="text"
                label="Phone Number"
                labelPlacement={"outside"}
                placeholder="Enter Your Ph. No."
                radius="full"
                variant="faded"
                isRequired
                // color="secondary"
                endContent={
                  <FaPhoneAlt className="flex-shrink-0 text-lg opacity-50 text-black/80" />
                }
              />
              <Input
                classNames={{
                  inputWrapper: "bg-primary font-RobotoSlab font-normal",
                }}
                name="company"
                isRequired
                size="lg"
                type="text"
                label="Company"
                labelPlacement={"outside"}
                placeholder="Enter Your Company Information"
                radius="full"
                variant="faded"
                // color="secondary"
                className="md:col-span-2"
                endContent={
                  <HiOutlineBuildingOffice2 className="flex-shrink-0 text-lg opacity-50 text-black/80" />
                }
              />
            </div>
            <Textarea
              classNames={{
                inputWrapper: "bg-primary font-RobotoSlab font-normal",
              }}
              name="comments"
              isRequired
              label="Comments"
              labelPlacement="outside"
              placeholder="Comments Please..."
              className="max-w-full"
              variant="faded"
              size="lg"
            />
            <Button
              color="warning"
              size="lg"
              radius="sm"
              className="font-semibold text-primary"
              role="button"
              type="submit"
            >
              Submit
            </Button>
          </form>
          <div className="space-y-1.5 text-center font-RobotoSlab">
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
          </div>
        </div>
        <div className="w-full h-full md:mt-6 md:w-1/2">
          <div className="mb-8 space-y-3">
            <h3 className="text-lg font-semibold tracking-wide font-RobotoSlab md:text-xl xl:text-2xl">
              Office Details
            </h3>
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
              <span className="font-semibold text-warning">Contact No - </span>
              +91-44-24512581/82/83
              <br />
              GST : 33AAPB8321M1Z0
            </address>
            <div className="w-full h-[380px] md:h-[630px]">
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
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};
