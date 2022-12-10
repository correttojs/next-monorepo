import { classed } from "@tw-classed/react";
import { DerivedComponentType } from "@tw-classed/react";
import React, { forwardRef } from "react";
import type * as Classed from "@tw-classed/react";
import { Flex } from "../Flex/Flex";

const ButtonBase = classed.button(
  "py-2 px-2 border text-white disabled:bg-gray-500",
  {
    variants: {
      color: {
        inverted:
          "border-sky-900 text-sky-900 bg-white hover:bg-sky-700 hover:text-white",
        sky: "border-sky-900 text-white bg-sky-900 hover:bg-sky-700",
        black:
          "bg-black border-black hover:bg-gray-200 hover:text-black hover:border-black",
      },

      size: {
        M: "px-6",
        S: "px-2",
      },
    },
    defaultVariants: {
      size: "M",
    },
    compoundVariants: [
      {
        color: "sky",
        className: "rounded",
      },
      {
        color: "inverted",
        className: "rounded",
      },
      {
        color: "black",
        className: "uppercase",
      },
    ],
  }
);

type ButtonVariants = Classed.VariantProps<typeof ButtonBase>;
type BaseButtonProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    Icon?: React.ReactNode;
    color: ButtonVariants["color"];
  } & Omit<ButtonVariants, "color">
>;

export const Button = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ Icon, ...props }, ref) => {
    return (
      <ButtonBase {...props} ref={ref}>
        <Flex justify="center" align="center" className="w-full">
          {Icon && <span className="mr-2">{Icon}</span>}
          {props.children}
        </Flex>
      </ButtonBase>
    );
  }
) as DerivedComponentType<typeof ButtonBase, BaseButtonProps>;
