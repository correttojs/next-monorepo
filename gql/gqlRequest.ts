import { print } from "graphql/language/printer";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import type { OperationDefinitionNode } from "graphql";

export const GQL_CONFIG = {
  endpoint: `${process.env.GRAPHQL_ENDPOINT}`,
  headers: {
    "Content-Type": "application/json",
  },
};

import type { GraphQLError } from "graphql/error";

export type GqlResponse<TData> = { data: TData; errors: GraphQLError[] };

export const getOperationName = (document: TypedDocumentNode<any, any>) => {
  return (
    (document.definitions[0] as OperationDefinitionNode)?.name?.value ?? ""
  );
};
export const getOperationType = (document: TypedDocumentNode<any, any>) => {
  return (document.definitions[0] as OperationDefinitionNode)?.operation;
};

export const createRequest = <TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  customHeaders?: { [key: string]: string } | null
) => {
  const operationName = getOperationName(document);

  const params: { [key: string]: string } = {
    operationName,
  };

  const url = new URL(GQL_CONFIG.endpoint);

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  const postUrl = url.toString();

  if (variables) {
    url.searchParams.append("variables", JSON.stringify(variables));
  }

  const getUrl = url.toString();

  const body = {
    operationName,
    ...(variables && { variables }),
  };

  const headers = {
    ...customHeaders,
    ...GQL_CONFIG.headers,
  };

  return {
    getUrl,
    postUrl,
    body,
    headers,
  };
};

const postRequest = async ({
  postUrl,
  headers,
  body,
  document,
}: {
  postUrl: string;
  headers: { [key: string]: string };
  body: {
    operationName: string;
    variables?: any;
    extensions?: {
      persistedQuery: { version: number; sha256Hash: string };
    } | null;
  };
  document: TypedDocumentNode<any, any>;
}) => {
  const result = await fetch(postUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({ ...body, query: print!(document) }),
  }).then((r) => r.json());
  return result;
};

export const gqlRequest = async <TData, TVariables>(
  document: any,
  variables?: TVariables,
  customHeaders?: { [key: string]: string } | null
): Promise<TData & { isNotFound?: boolean }> => {
  const { body, headers, postUrl } = createRequest(
    document,
    variables,
    customHeaders
  );
  let result: GqlResponse<TData>;

  result = await postRequest({ postUrl, headers, body, document });

  if (result.errors?.length) {
    const rawError = result.errors[0];
    if (rawError) {
      throw rawError;
    }
  }
  return result?.data;
};
