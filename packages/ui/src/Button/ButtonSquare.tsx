import classNames from "classnames";

import React from "react";

export const ButtonSquare: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ className, children, ...props }) => (
  <button
    className={classNames(
      " py-3 px-6 text-lg text-white hover:text-black uppercase bg-black hover:bg-gray-200",

      className
    )}
    {...props}
  >
    {children}
  </button>
);
