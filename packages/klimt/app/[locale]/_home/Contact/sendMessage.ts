import type { SendMessage } from "packages/klimt/pages/api/send-message";

export const sendMessage = async (data: SendMessage) =>
  fetch("/api/send-message", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());
