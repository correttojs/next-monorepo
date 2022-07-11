/* eslint-disable no-nested-ternary */
import classNames from "classnames";
import React from "react";
import {
  TwColorClass,
  TwColorHoverClass,
  TwMargin,
} from "@packages/ui/tailwind.types";

export const ButtonBase: React.FC<React.PropsWithChildren<React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  colorClasses: TwColorClass[];
  hoverColorClasses: TwColorHoverClass[];
  marginClasses?: TwMargin[];
  size?: "S" | "M";
  Icon?: React.ReactElement;
  isRounded?: boolean;
}>> = ({
  className,
  children,
  size = "M",
  Icon,
  color,
  colorClasses,
  hoverColorClasses,
  marginClasses,
  isRounded = true,
  ...props
}) => {
  return (
    <button
      className={classNames(
        ...colorClasses,
        ...hoverColorClasses,
        ...(marginClasses ?? []),
        className,
        isRounded && "rounded",
        size === "M" ? "px-6" : "px-2",
        "tracking-wider py-2 border text-white disabled:bg-gray-500"
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
};
