/* eslint-disable react-hooks/rules-of-hooks */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import typeDefs from "../../server/resolvers/schema.graphql";
import { envelop, useSchema } from "@envelop/core";
import { resolvers } from "../../server/resolvers/resolvers";

const { makeExecutableSchema } = require("@graphql-tools/schema");
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export const getEnveloped = envelop({
  plugins: [useSchema(schema)],
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { parse, validate, contextFactory, execute, schema } = getEnveloped({
    req,
  });

  // Parse the initial request and validate it
  const { query, variables } = req.body;
  const document = parse(query);
  const validationErrors = validate(schema, document);

  if (validationErrors.length > 0) {
    return res.end(JSON.stringify({ errors: validationErrors }));
  }

  // Build the context and execute
  const contextValue = await contextFactory();
  const result = await execute({
    document,
    schema,
    variableValues: variables,
    contextValue,
  });

  res.status(200).json(result);
}
