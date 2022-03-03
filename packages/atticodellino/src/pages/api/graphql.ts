import { createServer } from "@graphql-yoga/node";
import { resolvers } from "@/graphql/resolvers";
import typeDefs from "@/graphql/typeDefs.graphql";

const server = createServer({
  cors: false,
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
