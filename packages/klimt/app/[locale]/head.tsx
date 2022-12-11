import { getLayout } from "./_layout/getLayout";
import { ParamsTypes } from "./_layout/types";

export default async function Head({ params }: ParamsTypes) {
  if (!["en", "de"].includes(params.locale)) {
    return <></>;
  }
  const { apartment } = await getLayout(params.locale);
  return (
    <>
      <title>{apartment?.name}</title>
    </>
  );
}
