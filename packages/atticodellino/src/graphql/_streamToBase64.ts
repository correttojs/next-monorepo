import { ReadStream } from "fs";

export const streamTo64 = (stream: ReadStream) => {
  return new Promise((resolve) => {
    const chunks: any[] = [];

    stream.on("data", function (chunk: any) {
      chunks.push(chunk);
      // data += stream.read().toString("base64");
    });
    stream.on("end", function () {
      const result = Buffer.concat(chunks);
      resolve(result.toString("base64"));
    });
  });
};
