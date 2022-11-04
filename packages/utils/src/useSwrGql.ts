import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { useState } from "react";
import useSWR, { SWRConfiguration, SWRResponse, useSWRConfig } from "swr";
import { gqlRequest } from "./gqlRequest";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type SWR_GQL_TYPE<TData, TVariables, TError = unknown> = SWRResponse<
  TData,
  TError
> & {
  isLoading: boolean;
};

export const useSwrGql = <TData, TVariables, TError = unknown>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  options?: SWRConfiguration<TData, TError> & {
    url?: string;
    enabled?: boolean;
  }
): SWR_GQL_TYPE<TData, TVariables, TError> => {
  const isEnabled = options?.enabled !== false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const key = `${(document.definitions[0] as any)?.name?.value}${JSON.stringify(
    variables
  )}`;
  const response = useSWR<TData>(
    isEnabled ? key : null,
    () => gqlRequest(document, variables, options?.url),
    options
  );

  return {
    ...response,
    isLoading: !response.error && !response.data,
  };
};

type SWR_MUTATE_TYPE<TData, TVariables, TError = unknown> = Omit<
  SWRResponse<TData, TError>,
  "mutate"
> & {
  isLoading: boolean;
  mutate: (vars: TVariables) => Promise<TData | undefined>;
};

export const useSwrMutate = <TData, TVariables, TError = unknown>(
  document: TypedDocumentNode<TData, TVariables>,
  options?: SWRConfiguration<TData, TError> & {
    url?: string;
    onSuccess?: (data?: TData) => void;
  }
): SWR_MUTATE_TYPE<TData, TVariables, TError> => {
  const { mutate: swrMutate } = useSWRConfig();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const key = `${(document.definitions[0] as any)?.name?.value}`;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { mutate: _, ...response } = useSWR<TData>(key);
  const [isLoading, setIsLoading] = useState(false);

  const mutate = (vars: TVariables) =>
    swrMutate<TData>(key, async () => {
      setIsLoading(true);
      const res = await gqlRequest(document, vars, options?.url);
      options?.onSuccess?.(res);
      setIsLoading(false);
      return res;
    });
  return {
    ...response,
    isLoading,
    mutate,
  };
};
