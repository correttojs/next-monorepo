import { Resolvers } from "./resolvers.types";

export const resolvers: Resolvers = {
  Query: {
    hello: () => "World",
  },
};
