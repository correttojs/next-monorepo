import { MutationResolvers } from "@/generated/resolvers-types";
import sgMail from "@sendgrid/mail";

import { ResolverContext } from "./resolvers";

sgMail.setApiKey(process.env.SEND_GRID_API ?? "");

const FROM = `"L'attico del Lino" <${process.env.NEXT_PUBLIC_FROM_EMAIL}>`;

export const bookMutation: MutationResolvers<ResolverContext>["book"] = async (
  _,
  { user }
) => {
  const content = {
    to: process.env.NEXT_PUBLIC_FROM_EMAIL,
    from: FROM, // sender address
    subject: `Booking request from L'attico del Lino`, // Subject line
    html: `
        <h1>Registration Request</h1>
        <p>User: ${user?.firstName} ${user?.lastName}</p>
        <p>Document: ${user?.email} </p>
    `,
  };

  await sgMail.send([content]);

  return {
    firstName: user?.firstName,
    lastName: user?.lastName,
  };
};
