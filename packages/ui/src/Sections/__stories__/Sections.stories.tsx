// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { SplitSections } from "../SplitSections";
import SrcImage from "./icon_512.png";
import Image from "next/legacy/image";
import { H1, H2, P } from "@packages/ui/Typography";
import { Collapsible } from "@packages/ui/Sections/Collapsible";

export default {
  title: "UI/Sections",
} as Meta;

const Section = () => (
  <div>
    <H1>{"TEST"}</H1>
    <H2>Test Title H2</H2>
    <P>
      {`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.`}
    </P>
  </div>
);

export const Sections: Story = (args) => (
  <div>
    <SplitSections
      sections={[
        {
          title: "Section Title",
          hash: "hash",
          content: {
            html: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.`,
          },
          Side: <Image src={SrcImage} alt="" />,
        },
      ]}
    />

    <div>
      <Collapsible text={{ more: "more", hide: "hide" }} showReadMore={true}>
        <Section />
        <Section />
        <Section />
        <Section />
      </Collapsible>
    </div>
  </div>
);
