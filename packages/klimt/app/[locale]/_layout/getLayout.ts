import { gqlRequest } from "@packages/utils/gqlRequest";
import { LayoutDocument, Locale } from "./generated/codegen";

export const getLayout = (locale: Locale) =>
  gqlRequest(
    LayoutDocument,
    {
      locale: [locale],
    },
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ""
  );
