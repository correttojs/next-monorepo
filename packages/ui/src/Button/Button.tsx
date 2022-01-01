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

const ButtonNoColor =
  "text-xl font-lemonism tracking-wider py-2 rounded focus:outline-none";

const Pink = `text-white bg-pink-600 hover:bg-pink-700`;
const PinkInverted = `bg-white text-pink-600 border-solid  border-2 border-pink-600 hover:text-pink-700`;

const Yellow = `text-white bg-yellow-600 hover:bg-yellow-700`;
const YellowInverted = `bg-white text-yellow-600 border-solid  border-2 border-yellow-600 hover:text-yellow-700`;

const Blue = `text-white bg-blue-500 hover:bg-blue-700`;
const BlueInverted = `bg-white text-blue-600 border-solid  border-2 border-blue-600 hover:text-blue-700`;

export const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { color: Colors; padding?: "s" | "m" }
> = ({ color, className, children, padding = "m", ...props }) => (
  <button
    className={classNames(
      "text-white",
      color === "blue" && Blue,
      color === "pink" && Pink,
      color === "yellow" && Yellow,
      color === "blue-inverted" && BlueInverted,
      color === "pink-inverted" && PinkInverted,
      color === "yellow-inverted" && YellowInverted,
      className,
      padding === "m" ? "px-6" : "px-4",
      ButtonNoColor
    )}
    {...props}
  >
    {children}
  </button>
);
