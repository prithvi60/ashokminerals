"use client";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { useState } from "react";
import Loader from "./Loader";
import { usePathname } from "next/navigation";
import path from "path";

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
    reference: "",
};

export const Contact = ({ data }) => {
    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState(false);
    const pathname = usePathname();
    const pathNames = pathname.split("/").filter((path) => path);
    const refer = pathNames[pathNames.length - 1]?.replace(/[-_]/g, " ")
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
            reference: refer || "General Enquiry",
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
                e.target.reset();
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
        <form className="w-full h-full space-y-3" onSubmit={handleSubmit}>
            {data ? (
                <h3 className="mb-8 text-lg font-medium !leading-tight font-RobotoSlab md:text-2xl tracking-wide w-full whitespace-normal break-words text-center">
                    {`Get Callback and Insights about the ${pathname.startsWith("/products") ? "product" : "market"}`}
                </h3>

            ) : (
                <h3 className="mb-8 text-lg font-medium !leading-tight font-RobotoSlab md:text-xl tracking-widest">
                    Let&apos;s Get in touch to Explore business opportunities
                </h3>
            )}

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
                    base: "tracking-widest placeholder:tracking-widest",
                    label: "capitalize font-Poppins font-normal tracking-widest",
                    trigger: "bg-secondary h-10 min-h-10",
                    value: "capitalize",
                }}
            >
                {lists.map((list, idx) => (
                    <SelectItem
                        classNames={{ base: "capitalize tracking-widest" }}
                        key={idx}
                    >
                        {list}
                    </SelectItem>
                ))}
            </Select>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <Input
                    classNames={{
                        inputWrapper:
                            "bg-secondary font-RobotoSlab font-normal tracking-widest placeholder:tracking-widest h-10 min-h-10",
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
                        inputWrapper:
                            "bg-secondary font-RobotoSlab font-normal tracking-widest placeholder:tracking-widest h-10 min-h-10",
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
                        inputWrapper:
                            "bg-secondary font-RobotoSlab font-normal tracking-widest placeholder:tracking-widest h-10 min-h-10",
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
                    inputWrapper:
                        "bg-secondary font-RobotoSlab font-normal tracking-widest placeholder:tracking-widest h-10 min-h-10",
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
                    inputWrapper:
                        "bg-secondary font-RobotoSlab font-normal tracking-widest placeholder:tracking-widest h-10 min-h-10",
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
                    inputWrapper:
                        "bg-secondary font-RobotoSlab font-normal tracking-widest placeholder:tracking-widest h-10 min-h-10",
                }}
                rows={2}
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
    );
};
