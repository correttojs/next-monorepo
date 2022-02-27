import typeDefs from "../../server/resolvers/schema.graphql";
import { createServer } from "@graphql-yoga/node";
import { resolvers } from "../../server/resolvers/resolvers";

const server = createServer({
  cors: false,
  endpoint: "/api/graphql",
  schema: {
    typeDefs,
    resolvers,
  },
});

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default server.requestListener;
