// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { H1, H2, P } from "../Texts";

export default {
  title: "UI/Text",
} as Meta;

const Template: Story<React.ButtonHTMLAttributes<any>> = (args) => {
  return (
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
};

export const TextStories = Template.bind({});
