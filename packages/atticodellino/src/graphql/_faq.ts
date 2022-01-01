import { GetFaqsDocument } from "@/generated/graphql-graphcms";
import { Faq, QueryResolvers } from "@/generated/resolvers-types";

import { graphCmsRequest } from "./graphcms";
import { ResolverContext } from "./resolvers";

export const faq: QueryResolvers<ResolverContext>["faq"] = async (
  parent,
  args
) => {
  // const result = await graphCmsRequest(GetReservationDocument, {
  //   input: args.hash,
  // });
  // const reservation = result.reservations?.[0];

  const data = await graphCmsRequest(GetFaqsDocument);
  if (args.hash !== data.apartments[0].enterCode) {
    throw new Error("Wrong Code");
  }

  return data?.faqs as Faq[];
};
