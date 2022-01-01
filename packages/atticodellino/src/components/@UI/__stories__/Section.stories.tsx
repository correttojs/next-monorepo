// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { Section, SplitSection } from "../Section";
import { H2, P } from "../Texts";
const bread = require("./bread.png");

const Bg = styled.div`
  ${tw`bg-gray-200`}
`;

export default {
  title: "UI/Section",
} as Meta;

const SampleText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.`;

const Template: Story = (args) => (
  <Section style={{ backgroundColor: "#edf2f7" }}>{SampleText}</Section>
);

export const SectionStory = Template.bind({});

const TemplateSplit: Story = (args) => (
  <Bg>
    <SplitSection.Section>
      <SplitSection.Side>
        <img src={bread} />
      </SplitSection.Side>
      <SplitSection.Main>
        <H2>Test Title</H2>
        <P
          className="py-4"
          dangerouslySetInnerHTML={{
            __html: SampleText,
          }}
        />
      </SplitSection.Main>
    </SplitSection.Section>
  </Bg>
);

export const SectionSplitStory = TemplateSplit.bind({});

const TemplateSplitRight: Story = (args) => (
  <Bg>
    <SplitSection.Section>
      <SplitSection.Main>
        <H2>Test Title</H2>
        <P
          className="py-4"
          dangerouslySetInnerHTML={{
            __html: SampleText,
          }}
        />
      </SplitSection.Main>
      <SplitSection.Side>
        <img src={bread} />
      </SplitSection.Side>
    </SplitSection.Section>
  </Bg>
);

export const SectionSplitStoryRight = TemplateSplitRight.bind({});
