/* eslint-disable no-nested-ternary */
import classNames from "classnames";

import React from "react";

export type Colors =
  | "pink"
  | "yellow"
  | "blue"
  | "pink-inverted"
  | "yellow-inverted"
  | "blue-inverted";

export const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { color: string; activeColor: string }
> = ({ className, children, color, activeColor, ...props }) => (
  <button
    className={classNames(
      "text-white",
      className,
      "text-white tracking-wider py-2 px-6 rounded"
    )}
    {...props}
    style={{ backgroundColor: color }}
    css={`
      &:hover {
        background-color: #0e6189;
      }
    `}
  >
    {children}
  </button>
);
