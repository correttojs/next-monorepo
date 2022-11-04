/* eslint-disable no-console */
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient } from "graphql-request";

export const gqlRequest = <TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  url = `/api/graphql`
) => {
  return jest.fn(() => {
    console.log("mutate!");
    return Promise.resolve();
  });
};
