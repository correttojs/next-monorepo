import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(
  `https://api.takeshape.io/project/${process.env.TAKESHAPE_PROJECT}/graphql`,
  {
    headers: {
      Authorization: `Bearer ${process.env.TAKESHAPE_API_KEY}`,
    },
  }
);

export const takeShapeRequest = <TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
) => client.request<TData, TVariables>(document, variables);
