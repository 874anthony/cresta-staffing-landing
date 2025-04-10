import { NextResponse } from "next/server";

import ExcelJS from "exceljs";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export async function POST(req) {
  const { fullName, companyName, phone, email, message } = await req.json();

  try {
    // Create a new Excel workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Contact Form Data");

    // Define a header row
    worksheet.addRow([
      "Full Name",
      "Company Name",
      "Phone",
      "Email",
      "Message",
    ]);

    // Add the form data as a new row
    worksheet.addRow([fullName, companyName, phone, email, message]);

    // Write the workbook to a buffer
    const buffer = await workbook.xlsx.writeBuffer();

    // Configure AWS S3 client
    const s3 = new S3Client({
      region: process.env.AWS_REGION_CUSTOM,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID_CUSTOM,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_CUSTOM,
      },
    });

    // Create a unique file name (using a timestamp, for example)
    const timestamp = Date.now();
    const dayWithDashes = new Date().toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const day = dayWithDashes.replace(/-/g, "-");

    const fileName = `contact-form-${day}-${timestamp}.xlsx`;

    // Define S3 upload parameters
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME_CUSTOM, // set this in your environment variables
      Key: fileName,
      Body: buffer,
      ContentType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    };

    // Upload the file to S3
    const data = await s3.send(new PutObjectCommand(params));

    return NextResponse.json(
      {
        ok: true,
        message: "File uploaded successfully",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}
