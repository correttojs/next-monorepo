/* eslint-disable no-console */
import { FileUploadDocument } from "@/components/FormRegister/register.generated";
import { useSwrMutate } from "@packages/utils/useSwrGql";
import React from "react";

const Page = () => {
  const { mutate, data } = useSwrMutate(FileUploadDocument, {
    onSuccess: (d) => {
      console.log("onSuccess", d);
    },
  });
  console.log(data);
  return (
    <input
      id={"test"}
      name={"tes"}
      type="file"
      onChange={(event) => {
        const file = event?.currentTarget?.files?.[0];
        console.log(file);
        mutate({ file });
      }}
    />
  );
};

export default Page;
