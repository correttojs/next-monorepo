/* eslint-disable no-nested-ternary */
import classNames from "classnames";

import React from "react";

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
  <button
    className={classNames(
      className,
      "hover:text-white tracking-wider py-2 rounded",
      size === "M" ? "px-6" : "px-2",
      isInverted ? "bg-white" : "text-white"
    )}
    {...props}
    style={{ backgroundColor: isInverted ? "#fff" : "#09364c" }}
    css={`
      border: 1px solid #09364c;
      &:hover {
        background-color: #0e6189 !important;
      }
    `}
  >
    {Icon ? (
      <div className="flex items-center">
        {Icon} <span className="mx-2">{children}</span>
      </div>
    ) : (
      children
    )}
  </button>
);
