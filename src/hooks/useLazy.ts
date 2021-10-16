import isInnerChromatic from "chromatic/isChromatic";

export const isChromatic = () =>
  typeof window !== "undefined" && isInnerChromatic();

import {
  InViewHookResponse,
  IntersectionOptions,
  useInView,
} from "react-intersection-observer";

export type LazyMountType = InViewHookResponse;

export const useLazyMount = (
  observerOptions: IntersectionOptions = {}
): LazyMountType => {
  return useInView({
    ...observerOptions,
    skip: isChromatic(),
    initialInView: isChromatic(),
  });
};
