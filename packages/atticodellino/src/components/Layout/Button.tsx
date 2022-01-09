/* eslint-disable no-nested-ternary */
import classNames from "classnames";
import React from "react";
import { ButtonBase } from "@packages/ui/Button/ButtonBase";

export const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { size?: "S" | "M"; isInverted?: boolean; Icon?: React.ReactElement }
> = ({
  className,
  children,
  size = "M",
  isInverted = false,
  Icon,
  ...props
}) => (
  <ButtonBase
    colorClasses={["bg-sky-900", "border-sky-900"]}
    hoverColorClasses={["hover:bg-sky-700"]}
    size={size}
    className={classNames(
      className,
      "disabled:bg-gray-500 disabled:border-gray-500",
      isInverted ? "bg-white text-sky-900" : "text-white bg-sky-900"
    )}
    {...props}
  >
    {children}
  </ButtonBase>
);
