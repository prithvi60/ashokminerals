"use client";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { useState } from "react";
import Loader from "./Loader";

const lists = [
  "sample interest",
  "general enquiry",
  "supplier",
  "product of interest",
];
const initialFormData = {
  firstName: "",
  lastName: "",
  detailFor: "",
  phoneNo: "",
  userEmail: "",
  companyName: "",
  message: "",
};

export const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(true);

    const emailFormData = {
      userName: formData.firstName + " " + formData.lastName,
      detailFor: formData.designation,
      userEmail: formData.userEmail,
      phone: formData.phoneNo,
      companyName: formData.companyName,
      message: formData.message,
    };

    try {
      const emailResponse = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailFormData),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.text();
        throw new Error(
          `Email API Error: ${emailResponse.status} ${errorData}`
        );
      }
      const emailDataResult = await emailResponse.json();

      if (emailDataResult.success) {
        setStatus(false);
        setFormData(initialFormData);
        (e.target).reset();
        window.location.href = "/thankyou";
      } else {
        throw new Error("operations failed.");
      }
    } catch (error) {
      console.error("Error sending emails:", error);
      setStatus(false);
    }
  };
  return (
    <section
      className="relative w-full h-full space-y-10 md:h-auto font-RobotoSlab"
      id="contact"
    >
      <div className="h-full px-6 py-10 space-y-10 bg-secondary sm:py-12 sm:px-10 lg:px-64 md:space-y-0">
        <h3 className="relative block w-full text-2xl font-semibold md:hidden sm:text-3xl lg:text-5xl">
          Contact us
        </h3>
        <div className="flex flex-col-reverse justify-center gap-6 lg:gap-12 md:flex-row">
          {/* contact details */}
          <div className="flex flex-col items-start w-full h-auto gap-10 mt-6 md:1/2 lg:w-3/5">
            <div className="block space-y-6">
              <h3 className="relative hidden w-full text-2xl font-semibold sm:text-3xl lg:text-5xl md:block">
                Contact us
              </h3>
              <p className="text-lg font-normal md:text-xl">
                Get in touch with us today through email, phone, or by filling out the form, and let us show you how Ashok Minerals can drive your success!
              </p>
              <p
                className="text-lg font-normal underline md:text-xl underline-offset-4 hover:text-warning w-max"
              // onClick={() => console.log("logged")}
              >
                contact@ashokminerals.com
              </p>
              <p className="text-lg font-normal md:text-xl hover:text-warning w-max">
                +91-44-24512581/82/83
              </p>
            </div>
            <div className="block space-y-10">
              <div className="block w-full space-y-4">
                <h4 className="text-xl font-semibold tracking-wide capitalize sm:text-2xl">
                  Customer Support
                </h4>
                <p className="text-lg font-normal md:text-xl">
                  Our committed support team is available 24/7 to assist with any
                  questions or concerns.
                </p>
              </div>
              <div className="block w-full space-y-4">
                <h4 className="text-xl font-semibold tracking-wide capitalize sm:text-2xl">
                  Sales & other Enquiries
                </h4>
                <p className="text-lg font-normal md:text-xl">
                  For any media inquiries or press-related questions, we invite
                  you to reach out to us at{" "}
                  <a href="mailto:vanessa@ashokminerals.com" className="mx-1 font-semibold hover:text-warning">
                    vanessa@ashokminerals.com.
                  </a>{" "}
                  If you have marketing-related inquiries, please connect with us
                  at
                  <a href="mailto:vanessa@ashokminerals.com" className="mx-1 font-semibold hover:text-warning">
                    marketing@ashokminerals.com
                  </a>
                  . <br />We look forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="w-full h-auto px-4 space-y-5 rounded-md shadow-md bg-primary py-7 md:1/2 lg:w-2/5">
            <form
              className="w-full h-auto space-y-8" onSubmit={handleSubmit}
            >
              <h3 className="mb-12 text-lg font-semibold tracking-wide font-RobotoSlab md:text-xl xl:text-2xl">
                Let’s Get in touch to Explore business opportunities
              </h3>
              <Select
                aria-label="options"
                name="detailFor"
                value={formData.detailFor || ""}
                onChange={handleChange}
                isRequired
                size="lg"
                placeholder="How Can I Help You ?"
                radius="full"
                variant="faded"
                className="mt-8 max-w-ful"
                classNames={{
                  label: "capitalize font-Poppins font-normal",
                  trigger: "bg-secondary",
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
                    inputWrapper: "bg-secondary font-RobotoSlab font-normal",
                  }}
                  name="firstName"
                  isRequired
                  size="lg"
                  type="firstName"
                  value={formData.firstName || ""}
                  onChange={handleChange}
                  radius="full"
                  variant="faded"
                  placeholder="First Name"
                />
                <Input
                  classNames={{
                    inputWrapper: "bg-secondary font-RobotoSlab font-normal",
                  }}
                  name="lastName"
                  isRequired
                  size="lg"
                  type="lastName"
                  value={formData.lastName || ""}
                  onChange={handleChange}
                  placeholder="Last Name"
                  radius="full"
                  variant="faded"
                />
                <Input
                  classNames={{
                    inputWrapper: "bg-secondary font-RobotoSlab font-normal",
                  }}
                  name="companyName"
                  isRequired
                  size="lg"
                  type="text"
                  value={formData.companyName || ""}
                  onChange={handleChange}
                  placeholder="Company Information"
                  radius="full"
                  variant="faded"
                  className="md:col-span-2"
                />
              </div>
              <Input
                classNames={{
                  inputWrapper: "bg-secondary font-RobotoSlab font-normal",
                }}
                name="userEmail"
                isRequired
                size="lg"
                type="email"
                placeholder="Email"
                radius="full"
                variant="faded"
                value={formData.userEmail || ""}
                onChange={handleChange}
              />
              <Input
                classNames={{
                  inputWrapper: "bg-secondary font-RobotoSlab font-normal",
                }}
                name="phoneNo"
                size="lg"
                type="text"
                placeholder="Phone No."
                radius="full"
                variant="faded"
                isRequired
                value={formData.phoneNo || ""}
                onChange={handleChange}
              />
              <Textarea
                classNames={{
                  inputWrapper: "bg-secondary font-RobotoSlab font-normal",
                }}
                name="message"
                isRequired
                value={formData.message || ""}
                onChange={handleChange}
                placeholder="Comments Please..."
                className="max-w-full"
                variant="faded"
                size="lg"
              />
              <div className="w-full h-full text-center">
                <Button
                  color="warning"
                  size="lg"
                  radius="none"
                  className="px-6 font-semibold w-max text-primary md:px-8"
                  role="button"
                  type="submit"
                >
                  {status ? <Loader /> : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* location map */}
      <div className="flex flex-col w-full h-full gap-8 px-6 py-10 md:gap-6 xl:gap-10 sm:py-12 sm:px-10 lg:px-64 md:flex-row ">
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
            <br />
            <span className="font-semibold text-warning">
              {" "}
              Primary Manufacturing Unit & Warehouse :
            </span>
            <br /> F 15 & F86, Sipcot industrial complex,
            <br /> Gummidipoondi - 601201.
            <br />
          </address>
          <address className="text-base font-normal font-RobotoSlab">
            <span className="font-semibold text-warning">
              {" "}
              Office:
            </span>
            <br /> 2A, first street, Karpagambal nagar,
            <br /> Kottivakkam,
            <br /> Chennai - 600041.
            <br />
            <br />
            <span className="font-semibold">GST : 33AAPB8321M1Z0</span>
          </address>
        </div>
      </div>
    </section>
  );
};
