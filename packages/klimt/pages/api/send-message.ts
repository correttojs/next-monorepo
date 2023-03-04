import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SEND_GRID_API ?? "SG.");

export interface SendMessage {
  name: string;
  email: string;
  message: string;
}

export default async function sendMessage(
  request: NextApiRequest & { body: SendMessage },
  res: NextApiResponse
) {
  const content = {
    to: "fabio.benedetti@gmail.com",
    from: request.body.email, // sender address
    subject: `Message From Klimt`, // Subject line
    html: `
            <p>Name: ${request.body?.name} </p>
            <p>Email: ${request.body?.email} </p>
            <p>Email: ${request.body?.message} </p>
        `,
  };
  await sgMail.send([content]);

  return res.status(200).json({ sent: true });
}
