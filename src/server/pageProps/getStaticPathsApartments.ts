import { gqlRequest } from "@correttojs/next-utils/useReactQuery";
import { GetStaticPaths } from "next";
import { ApartmentListDocument } from "../../generated/codegen";

export const getStaticPathsApartments =
  (suffix: string): GetStaticPaths =>
  async () => {
    const data = await gqlRequest(
      ApartmentListDocument,
      {},
      process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ""
    );
    return {
      paths: data.apartments.map((apartment) => {
        return `/${apartment.slug ?? ""}${suffix}`;
      }),
      fallback: "blocking",
    };
  };
