/* eslint-disable no-nested-ternary */
import classNames from "classnames";
import React from "react";
import { ButtonBase } from "@packages/ui/Button";

export const Button: React.FC<React.PropsWithChildren<React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { size?: "S" | "M"; isInverted?: boolean; Icon?: React.ReactElement }>> = ({
  className,
  children,
  size = "M",
  isInverted = false,
  Icon,
  ...props
}) => (
  <ButtonBase
    colorClasses={[
      isInverted ? "bg-white" : "bg-sky-900",
      "border-sky-900",
      isInverted ? "text-sky-900" : "text-white",
    ]}
    hoverColorClasses={["hover:bg-sky-700"]}
    size={size}
    className={classNames(className)}
    {...props}
  >
    {children}
  </ButtonBase>
);
