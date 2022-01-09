import { ButtonBase } from "@packages/ui/Button/ButtonBase";
import classNames from "classnames";

import React from "react";

export const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ className, children, ...props }) => (
  <ButtonBase
    isRounded={false}
    marginClasses={["m-4"]}
    colorClasses={["bg-black", "border-black"]}
    hoverColorClasses={[
      "hover:bg-gray-200",
      "hover:text-black",
      "hover:border-black",
    ]}
    className={classNames(" uppercase", className)}
    {...props}
  >
    {children}
  </ButtonBase>
);
