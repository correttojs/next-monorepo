import classNames from "classnames";
import React, { FC } from "react";

import { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";

export type TypographyPropType = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {};

export const Typography: (as: ElementType) => FC<React.PropsWithChildren<TypographyPropType>> =
  (Element) =>
  // eslint-disable-next-line react/display-name
  ({ className, style, children, ...rest }) => {
    return (
      <Element
        style={{ ...style }}
        className={classNames([
          Element === "p" && "text-xl leading-8",
          Element === "span" && "text-lg",
          Element === "h3" && "font-semibold text-xl leading-6",
          Element === "h2" && "text-3xl leading-8",
          Element === "h1" &&
            "font-semibold text-4xl md:text-5xl xl:text-6xl leading-tight pt-2",
          className,
        ])}
        {...rest}
      >
        {children}
      </Element>
    );
  };

export const Span = Typography("span");
export const P = Typography("p");
export const H1 = Typography("h1");
export const H2 = Typography("h2");
export const H3 = Typography("h3");
