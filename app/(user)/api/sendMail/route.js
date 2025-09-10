import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req) {
  const {
    userName,
    detailFor,
    companyName,
    userEmail,
    phone,
    message,
    reference,
  } = await req.json();

  const imageUrl =
    "https://ik.imagekit.io/a7ag28udt/Ashok-Minerals-Logo.jpg?updatedAt=1757508276302";

  // !clientEmail
  if (!userEmail && !process.env.EMAIL_ID) {
    return NextResponse.json(
      { success: false, message: "Recipient email(s) missing" },
      { status: 400 }
    );
  }

  // Email options for the client (all user data and attachments)
  const clientMailOptions = {
    from: `${userEmail} <${"Marketing@ashokminerals.com"}>`,
    // from: `${userEmail}`,
    to: process.env.EMAIL_ID,
    subject: `New Customer Form Submitted - ${reference} page`,
    html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
            <p style="font-size: 16px; color: #555;">Hi,</p>
            <p style="font-size: 16px; color: #555;">You have a new message from Ashok Minerals.</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="font-size: 16px; color: #555;"><strong>Customer Details:</strong></p>
            <p style="font-size: 16px; color: #555;"><strong>Name:</strong> ${userName}</p>
            <p style="font-size: 16px; color: #555;"><strong>Email:</strong> ${userEmail}</p>
            <p style="font-size: 16px; color: #555;"><strong>Phone Number:</strong> ${phone}</p>
            <p style="font-size: 16px; color: #555;"><strong>How can i help you?:</strong> ${detailFor}</p>
            <p style="font-size: 16px; color: #555;"><strong>Company Name:</strong> ${companyName}</p>
            <p style="font-size: 16px; color: #555;"><strong>Message:</strong>${message}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="font-size: 16px; color: #555;">Thanks & Regards</p>
            <br/>
            <br/>
            <div style="margin-bottom: 10px;">
             <img src=${imageUrl} alt="Ashok Minerals Logo" style="width: 150px; height: auto;">
            </div>
            <p style="font-size: 16px; color: #555;"><strong>Ashok Mineral Enterprises</strong></p>
            <p style="font-size: 16px; color: #555;">
             Primary Manufacturing Unit & Warehouse:
              <br/>
              F 15 & F86, Sipcot Industrial Complex,
              <br/>Gummidipoondi - 601201.
              <br/>
              GST: 33AAPB8321M1Z0
              <br/>
               Phone: +91-44-24512581/82/83
               <br/>
               Email: contact@ashokminerals.com
               <br/>
            </p>
        </div>
            `,
    bcc: ["vanessa@ashokminerals.com"],
  };

  const userMailOptions = {
    from: `"${process.env.EMAIL_ID}" <${"Marketing@ashokminerals.com"}>`,
    // from: `"${process.env.EMAIL_ID}"`,
    to: userEmail,
    subject: "Acknowledgment: We Received Your Submission",
    html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
            <p style="font-size: 16px; color: #555; margin-bottom: 10px;">Dear <strong>${userName}</strong></p>
            <p style="font-size: 16px; color: #555; margin-bottom: 10px;">Greetings from Ashok Mineral Enterprises!</p>
            <p style="font-size: 16px; color: #555;">
                We appreciate your interest in our products and acknowledge the receipt of your submission.
            </p>
            <p style="font-size: 16px; color: #555;">
                Our team will review your request and get back to you shortly. If you have any urgent inquiries, feel free to contact us at +91-44-24512581/82/83.
            </p>
            <p style="font-size: 16px; color: #555; margin-bottom: 26px;">Thanks & Regards</p>
            <div style="margin-bottom: 10px;">
             <img src=${imageUrl} alt="Ashok Minerals Logo" style="width: 150px; height: auto;">
            </div>
            <p style="font-size: 16px; color: #555;"><strong>Ashok Mineral Enterprises</strong></p>
            <p style="font-size: 16px; color: #555;">
             Primary Manufacturing Unit & Warehouse:
              <br/>
              F 15 & F86, Sipcot Industrial Complex,
              <br/>Gummidipoondi - 601201.
              <br/>
              GST: 33AAPB8321M1Z0
              <br/>
               Phone: +91-44-24512581/82/83
               <br/>
               Email: contact@ashokminerals.com
               <br/>
            </p>
        </div>`,
  };

  try {
    // Send acknowledgment email to the customer
    await transporter.sendMail(userMailOptions);

    // Send detailed email to the client
    await transporter.sendMail(clientMailOptions);

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Error sending emails" },
      { status: 500 }
    );
  }
}
