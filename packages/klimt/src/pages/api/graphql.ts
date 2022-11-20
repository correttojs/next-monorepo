import typeDefs from "../../server/resolvers/schema.graphql";
import { resolvers } from "../../server/resolvers/resolvers";

import { createSchema, createYoga } from "@graphql-yoga/node";
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
            query {
              hello
            }
          `,
        }
      : false,
  cors: false,
  schema: createSchema({ typeDefs, resolvers }),
});
