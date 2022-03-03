import * as fs from "fs";

import FormData from "form-data";
import fetch from "node-fetch";

export const upload = async (file: File, buffer: Buffer) => {
  const form = new FormData();
  form.append("fileUpload", buffer, {
    contentType: file.type,
    filename: file.name,
  });

  try {
    const res = (await fetch(
      `https://api-eu-central-1.graphcms.com/v2/${process.env.GQL_CMS_ID}/master/upload`,
      {
        method: "POST",
        body: form,
        headers: {
          Authorization: `Bearer ${process.env.GQL_CMS_TOKEN}`,
        },
      }
    ).then((r) => r.json())) as any;

    return res.url;
  } catch (e) {
    console.log(e);
    return null;
  }
};
