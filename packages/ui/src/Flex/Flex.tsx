import { classed } from "@tw-classed/react";

const sizes = ["sm", "md", "lg", "xl", "2xl"] as const;
type Sizes = (typeof sizes)[number];

const directions = {
  row: "flex-row",
  column: "flex-col",
  "row-reverse": "flex-row-reverse",
  "column-reverse": "flex-col-reverse",
};

const basis = {
  "1/3": "basis-1/3",
  "2/3": "basis-2/3",
  "1/2": "basis-1/2",
  "1/4": "basis-1/4",
  "3/4": "basis-3/4",
};

const getSizedValues = <
  TVariation extends string,
  TKey extends string,
  TValue extends Record<TKey, string>
>(
  variation: TVariation,
  values: TValue
) => {
  const result = {
    [variation]: values,
  } as Record<`${TVariation}-${Sizes}` | TVariation, TValue>;

  for (const size of sizes) {
    const currentResult = {} as TValue;
    for (const key of Object.keys(values)) {
      const typedKey = key as TKey;
      currentResult[typedKey] = `${size}:${values[typedKey]}` as TValue[TKey];
    }
    result[`${variation}-${size}`] = currentResult;
  }
  return result;
};

export const Flex = classed.div("flex", {
  variants: {
    ...getSizedValues("direction", directions),
    ...getSizedValues("basis", basis),
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
    },
    gap: {
      0: "gap-0",
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      5: "gap-5",
      6: "gap-6",
      7: "gap-7",
      8: "gap-8",
    },
    grow: {
      0: "grow-0",
      1: "grow",
    },
    flex: {
      1: "flex-1",
      auto: "flex-auto",
      none: "flex-none",
      initial: "flex-initial",
    },
    wrap: {
      wrap: "flex-wrap",
      "wrap-reverse": "flex-wrap-reverse",
      "no-wrap": "flex-nowrap",
    },
  },
});
