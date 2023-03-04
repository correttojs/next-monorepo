 
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
  });
};
