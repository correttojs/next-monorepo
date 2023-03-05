import type { SendMessage } from "../../../sendMessage/route";

export const sendMessage = async (data: SendMessage) =>
  fetch("/sendMessage", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());
