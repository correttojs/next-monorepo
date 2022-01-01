import { resolvers } from "@/graphql/resolvers";
import typeDefs from "@/graphql/typeDefs.graphql";
import { ApolloServer } from "apollo-server-micro";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  context: async ({ req }) => {
    const session = await getSession({ req });
    return { session };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const graphqlHandler = apolloServer.createHandler({ path: "/api/graphql" });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return graphqlHandler(req, res);
};
