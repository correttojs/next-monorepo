import { print } from "graphql/language/printer";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import type { DocumentNode, OperationDefinitionNode } from "graphql";

const GQL_CONFIG = {
  endpoint: `${process.env.GRAPHQL_ENDPOINT}`,
  headers: {
    "Content-Type": "application/json",
  },
};

import type { GraphQLError } from "graphql/error";

type GqlResponse<TData> = { data: TData; errors: GraphQLError[] };

const getOperationName = (document: TypedDocumentNode<any, any>) => {
  return (
    (document.definitions[0] as OperationDefinitionNode)?.name?.value ?? ""
  );
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

  const body = {
    operationName,
    ...(variables && { variables }),
  };

  const headers = {
    ...customHeaders,
    ...GQL_CONFIG.headers,
  };

  return {
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
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  customHeaders?: { [key: string]: string } | null
): Promise<TData> => {
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
