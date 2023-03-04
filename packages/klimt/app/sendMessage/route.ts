import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SEND_GRID_API ?? "SG.");

export interface SendMessage {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest & { body: SendMessage }) {
  console.log(request.body);
  // const content = {
  //   to: "fabio.benedetti@gmail.com",
  //   from: request.body.email, // sender address
  //   subject: `Message From Klimt`, // Subject line
  //   html: `
  //           <p>Name: ${request.body?.name} </p>
  //           <p>Email: ${request.body?.email} </p>
  //           <p>Email: ${request.body?.message} </p>
  //       `,
  // };
  // await sgMail.send([content]);

  return NextResponse.json({ sent: true });
}
