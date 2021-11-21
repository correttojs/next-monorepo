import { Resolvers } from "./resolvers.types";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SEND_GRID_API ?? "");

export const resolvers: Resolvers = {
  Query: {
    hello: () => "World",
  },
  Mutation: {
    message: async (_, data) => {
      const content = {
        to: "fabio.benedetti@gmail.com",
        from: data.email, // sender address
        subject: `Message From Klimt`, // Subject line
        html: ` 
            <p>Name: ${data?.name} </p>
            <p>Email: ${data?.email} </p>
            <p>Email: ${data?.message} </p>
        `,
      };
      await sgMail.send([content]);

      return true;
    },
  },
};
