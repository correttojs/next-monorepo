import React from "react";

export const H1: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, className, ...props }) => (
  <h1
    className={`font-semibold text-5xl leading-10 pt-2  ${className ?? ""}`}
    {...props}
  >
    {children}
  </h1>
);

export const H2: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, className, ...props }) => (
  <h2
    css={`
      font-size: 3rem;
      line-height: 3rem;
    `}
    className={`font-semibold text-3xl leading-8  ${className ?? ""}`}
    {...props}
  >
    {children}
  </h2>
);
export const H3: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, className, ...props }) => (
  <h3
    className={`font-semibold text-xl leading-6 ${className ?? ""}`}
    {...props}
  >
    {children}
  </h3>
);

export const P: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
> = ({ children, className, ...props }) => (
  <p className={`text-xl leading-8 ${className ?? ""}`} {...props}>
    {children}
  </p>
);

export const Span: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
> = ({ children, className, ...props }) => (
  <span className={`text-lg ${className ?? ""}`} {...props}>
    {children}
  </span>
);
