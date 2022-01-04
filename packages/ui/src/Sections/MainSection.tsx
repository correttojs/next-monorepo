import classNames from "classnames";
import React from "react";

export const MainSection: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => (
  <section
    className={classNames(
      "container mx-auto max-w-screen-lg px-4 lg:px-0",
      className
    )}
    {...props}
  >
    {children}
  </section>
);
