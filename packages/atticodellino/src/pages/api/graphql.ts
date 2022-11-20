import { createSchema, createYoga } from "@graphql-yoga/node";
import { resolvers } from "@/graphql/resolvers";
import typeDefs from "@/graphql/typeDefs.graphql";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: "/api/graphql",
  graphiql:
    process.env.NODE_ENV !== "production"
      ? {
          defaultQuery: /* GraphQL */ `
             reco{
                title
              }
          `,
        }
      : false,
  cors: false,
  schema: createSchema({ typeDefs, resolvers }) as any,
});
