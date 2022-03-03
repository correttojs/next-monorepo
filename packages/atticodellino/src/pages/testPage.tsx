import { FileUploadDocument } from "@/components/FormRegister/register.generated";
import { useReactMutation } from "@correttojs/next-utils/useReactQuery";
import { queryClient } from "@correttojs/next-utils/useReactQuery";
import React from "react";
import { QueryClientProvider } from "react-query";

const Page = () => {
  const { mutate, isLoading, error } = useReactMutation(FileUploadDocument);
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

const Parent: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider>
  );
};
export default Parent;
