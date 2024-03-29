import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient, Variables } from "graphql-request";

export const gqlRequest = <TData, TVariables = Variables>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  url = `/api/graphql`
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new GraphQLClient(url).request<TData>(document, variables as any);
};
