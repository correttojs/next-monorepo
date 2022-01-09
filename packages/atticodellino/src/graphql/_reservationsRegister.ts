import {
  GuestStatus,
  SecretsDocument,
  UpdateReservationDocument,
} from "@/generated/graphql-graphcms";
import {
  MutationRegisterGuestsArgs,
  MutationResolvers,
  ReservationStatus,
} from "@/generated/resolvers-types";
import sgMail from "@sendgrid/mail";

import { smsReminderLink } from "./_sms";
import { streamTo64 } from "./_streamToBase64";
import { graphCmsRequest } from "./graphcms";
import { ResolverContext } from "./resolvers";
import { upload } from "./upload";

sgMail.setApiKey(process.env.SEND_GRID_API ?? "");

const sendEmail = async ({
  files,
  user,
  apartmentCode,
}: {
  user: MutationRegisterGuestsArgs["user"];
  files: any[];
  apartmentCode: string;
}) => {
  console.log("SENDING_EMAIL", user.guests?.[0]?.firstName);
  let attachments: any[] = [];
  if (files?.[0]) {
    const streams = await Promise.all(
      files?.map((item) => {
        if (item) {
          const { createReadStream } = item;
          return streamTo64(createReadStream());
        }
        return null;
      })
    );

    attachments = files?.map(({ filename, mimetype }, i) => {
      return {
        filename,
        content: streams[i],
        type: mimetype,
        disposition: "attachment",
        contentId: filename,
      };
    });
  }

  const content = {
    to: process.env.NEXT_PUBLIC_FROM_EMAIL,
    from: `info@atticodellino.com`, // sender address
    subject: `Registration request from L'attico del Lino`, // Subject line
    html: `
        <h1>Registration Request ${user?.phone}</h1>
        <p>Phone: ${user?.phone}</p>
        <p>Apartment: ${apartmentCode}</p>
        <p>Checkout: ${user.check_out}</p>
        ${user.guests?.map((item) => {
          return `
             <p>User: ${item?.firstName} ${item?.lastName}</p>
            <p>Document: ${item?.documentType} - ${item?.documentNumber}</p>
            <p>Birth: ${item?.birthDate} - ${item?.nationality} - ${item?.placeOfBirth}</p>`;
        })}
    `,
    attachments,
  };
  try {
    await sgMail.send([content]);
  } catch (e) {
    console.error(e);
  }
};

export const registerGuests: MutationResolvers<ResolverContext>["registerGuests"] =
  async (_, { file, user }) => {
    const files = await Promise.all(file);
    const { guests, phone, home, check_out, ...input } = user;
    console.log("GUEST_NAME", guests?.[0]?.firstName);
    const apartment = await graphCmsRequest(SecretsDocument, {
      key: home,
    });
    const apartmentCode = apartment?.apartment?.enterCode ?? "";
    console.log("APARTMENT", apartmentCode);

    await sendEmail({ files, user, apartmentCode });

    console.log("UPLOAD URL TO GCMS", apartmentCode);
    const urls = await Promise.all(
      files?.map((item) => {
        if (item) {
          const { createReadStream } = item;
          return upload(createReadStream());
        }
        return null;
      })
    );

    console.log("URL", urls?.[0]);
    const data = await graphCmsRequest(UpdateReservationDocument, {
      input,
      data: {
        guests: {
          create: guests?.map((g, i) => ({ ...g, docFile: urls[i] })),
        },
        reservationStatus: GuestStatus.Registered,
      },
    });
    console.log("GCMS UPDATED");

    // await smsConfirmLink({
    //   phone,
    //   link: faqLink({ ...input, phone }),
    //   code: apartment?.getApartmentList?.items?.[0]?.code,
    //   hash: input.hash,
    // });

    await smsReminderLink({
      phone,
      schedule: `${check_out}103010`,
      hash: input.hash,
    });

    console.log("SMS REMINDER");
    return data?.updateReservation
      ?.reservationStatus as any as ReservationStatus;
  };
