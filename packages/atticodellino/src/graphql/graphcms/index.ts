import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(
  `https://api-eu-central-1.graphcms.com/v2/${process.env.GQL_CMS_ID}/master`,
  {
    headers: {
      Authorization: `Bearer ${process.env.GQL_CMS_TOKEN}`,
    },
  }
);

export const graphCmsRequest = <TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
) => client.request<TData, TVariables>(document, variables);
