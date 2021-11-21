import { Resolvers } from "./resolvers.types";

export const resolvers: Resolvers = {
  Query: {
    hello: () => "World",
  },
  Mutation: {
    message: (_, data) => {
      console.log(data);

      return true;
    },
  },
};
