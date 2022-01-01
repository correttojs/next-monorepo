import styled from "styled-components";

import classNames from "classnames";
import React from "react";

export const Section: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => (
  <section
    className={classNames("p-4 md:p-8 max-w-screen-xl mx-auto", className)}
    {...props}
  >
    {children}
  </section>
);

export const SectionWrap: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => (
  <Section
    className="flex flex-col items-center md:flex-row"
    css={`
      div:first-child {
        @media (min-width: 768px) {
          margin-right: 2rem;
        }
      }
    `}
    {...props}
  >
    {children}
  </Section>
);

export const SplitSection = {
  Section: SectionWrap,
  Main: styled.div`
    flex: 2;
  `,
  Side: styled.div`
    flex: 1;
  `,
};

export const SmallSection: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => (
  <section
    className={classNames("p-4 max-w-screen-sm mx-auto p-10", className)}
    {...props}
  >
    {children}
  </section>
);

export const FlexL: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => (
  <div className={classNames("flex-row p-12", className)} {...props}>
    {children}
  </div>
);
