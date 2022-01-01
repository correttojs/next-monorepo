import fetch from "node-fetch";

import { getLangByPhone } from "./_util";

const MESSAGES = {
  registrationLink: (link: string) => ({
    it: `Attico del Lino. Registrati per ricevere codice di entrata e istruzioni: ${link}`,
    en: ` Attico del Lino. Register to get the entry code and self-checkin instructions: ${link}`,
  }),
  confirm: (link: string, code: string) => ({
    it: `Codice di entrata: "${code}". Istruzioni: ${link}`,
    en: `Entry code: "${code}". Self-checkin instructions: ${link}`,
  }),
  reminder: {
    it: `Ricorda: Checkout e tassa turistica`,
    en: `Reminder: checkout and tourist tax`,
  },
};

type Payload = {
  recipient: string;
  message: string;
  schedule?: string;
  orderId: string;
};
export const sendSms = ({
  recipient,
  message,
  schedule,
  orderId,
}: Payload): Promise<any> => {
  console.log(
    recipient,
    message,
    message.length,
    parseInt((schedule ?? "").replace(/-/g, ""), 10),
    orderId
  );

  const body: any = {
    message_type: "GS",
    message,
    recipient: [recipient.replace(/ /g, "")],
    // sender: "+393477594144",
    // scheduled_delivery_time: 20201219102310,
    order_id: orderId,
    returnCredits: true,
  };
  if (schedule) {
    body.scheduled_delivery_time = schedule;
  }

  console.log(body, process.env.VERCEL_ENV);
  if (process.env.VERCEL_ENV !== "production") {
    return Promise.resolve(body);
  }
  return fetch("https://api.trendoo.net/API/v1.0/REST/sms", {
    method: "POST",
    headers: {
      user_key: process.env.TRENDOO_ID ?? "",
      Access_token: process.env.TRENDOO_PWD ?? "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((r) => r.json())
    .then((r) => {
      console.log(r);
      return r;
    });
};

export const smsRegisterLink = ({
  phone,
  link,
  hash,
}: {
  phone: string;
  link: string;
  hash: string;
}) => {
  return sendSms({
    recipient: phone,
    message: MESSAGES.registrationLink(link)[getLangByPhone(phone)],
    orderId: `${hash}_register`,
  });
};

export const smsConfirmLink = ({
  phone,
  link,
  code,
  hash,
}: {
  phone: string;
  link: string;
  code: string;
  hash: string;
}) => {
  return sendSms({
    recipient: phone,
    message: MESSAGES.confirm(link, code)[getLangByPhone(phone)],
    orderId: `${hash}_confirm`,
  });
};

export const smsReminderLink = ({
  phone,
  schedule,
  hash,
}: {
  phone: string;
  schedule: string;
  hash: string;
}) => {
  return sendSms({
    recipient: phone,
    message: MESSAGES.reminder[getLangByPhone(phone)],
    schedule,
    orderId: `${hash}_reminder`,
  });
};
