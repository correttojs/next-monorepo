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
      "tracking-wider py-2 rounded",
      size === "M" ? "px-6" : "px-2",
      isInverted ? "bg-white text-sky-900" : "text-white bg-sky-900",
      "border border-sky-900",
      "hover:text-white hover:bg-sky-700"
    )}
    {...props}
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
