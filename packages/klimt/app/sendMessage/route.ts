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
  const body: SendMessage = await request.json();
  const content = {
    to: "fabio.benedetti@gmail.com",
    from: body.email, // sender address
    subject: `Message From Klimt`, // Subject line
    html: `
            <p>Name: ${body?.name} </p>
            <p>Email: ${body?.email} </p>
            <p>Email: ${body?.message} </p>
        `,
  };
  await sgMail.send([content]);

  return NextResponse.json({ sent: true });
}
