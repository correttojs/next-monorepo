import { Reco } from "@/generated/graphql";
import { GetRecoDocument } from "@/generated/graphql-graphcms";
import { QueryResolvers } from "@/generated/resolvers-types";

import { graphCmsRequest } from "./graphcms";
import { ResolverContext } from "./resolvers";

export const reco: QueryResolvers<ResolverContext>["reco"] = async () => {
  // const result = await graphCmsRequest(GetReservationDocument, {
  //   input: args.hash,
  // });
  // const reservation = result.reservations?.[0];

  const data = await graphCmsRequest(GetRecoDocument);

  return data?.recommendations as Reco[];
};
