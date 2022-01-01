import {
  sendSms,
  smsConfirmLink,
  smsRegisterLink,
  smsReminderLink,
} from "@/graphql/_sms";

describe("Sms", () => {
  it("sendSms", async () => {
    const data = await sendSms({
      recipient: "Recipient",
      message: "Message",
      schedule: "1d",
      orderId: "123",
    });
    expect(data).toEqual({
      message_type: "GS",
      message: "Message",
      recipient: ["Recipient"],
      order_id: "123",
      returnCredits: true,
      scheduled_delivery_time: "1d",
    });
  });

  it("smsRegisterLink", async () => {
    const data = await smsRegisterLink({
      phone: "+39123",
      link: "faq",
      hash: "hash",
    });
    expect(data).toEqual({
      message_type: "GS",
      message:
        "Attico del Lino. Registrati per ricevere codice di entrata e istruzioni: faq",
      recipient: ["+39123"],
      order_id: "hash_register",
      returnCredits: true,
    });
  });

  it("smsConfirmLink", async () => {
    const data = await smsConfirmLink({
      phone: "+39123",
      link: "faq",
      hash: "hash",
      code: "123",
    });
    expect(data).toEqual({
      message_type: "GS",
      message: 'Codice di entrata: "123". Istruzioni: faq',
      recipient: ["+39123"],
      order_id: "hash_confirm",
      returnCredits: true,
    });
  });

  it("smsReminderLink", async () => {
    const data = await smsReminderLink({
      phone: "+39123",
      hash: "hash",
      schedule: "1d",
    });
    expect(data).toEqual({
      message_type: "GS",
      message: "Ricorda: Checkout e tassa turistica",
      recipient: ["+39123"],
      order_id: "hash_reminder",
      returnCredits: true,
      scheduled_delivery_time: "1d",
    });
  });
});
