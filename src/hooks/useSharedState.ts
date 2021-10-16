import { useCallback } from "react";
import { useQuery, useQueryClient } from "react-query";

type SharedStates = "isHeaderTransparent";

export const useSharedState = <TData>(
  key: SharedStates,
  initialValue: TData
): [TData | undefined, (value: TData) => TData] => {
  const client = useQueryClient();
  const { data } = useQuery(
    key,
    () => client.getQueryData<TData>(key) ?? initialValue,
    {
      initialData: initialValue,
      notifyOnChangeProps: ["data"],
    }
  );

  const setState = useCallback(
    (value: TData) => client.setQueryData<TData>(key, value),
    [key, client]
  );

  return [data, setState];
};

export const useMutateSharedState = <TData>(
  key: SharedStates
): ((value: TData) => TData) => {
  const client = useQueryClient();

  const setState = useCallback(
    (value: TData) => client.setQueryData<TData>(key, value),
    [key, client]
  );

  return setState;
};
