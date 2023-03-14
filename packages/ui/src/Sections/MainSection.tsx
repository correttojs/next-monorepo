import { classed } from "@tw-classed/react";
import { AnchorPointer } from "../AnchorPointer";

export const MainSection = classed.section(
  "container mx-auto max-w-screen-lg px-4 lg:px-0"
);

export const MainAnchorSection: React.FC<
  React.ComponentProps<typeof MainSection> & { anchor: string }
> = ({ anchor, children, ...props }) => {
  return (
    <MainSection {...props}>
      <AnchorPointer id={anchor} />
      {children}
    </MainSection>
  );
};
