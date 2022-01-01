// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

export default {
  title: "UI/TEST",
} as Meta;

const Template: Story<React.ButtonHTMLAttributes<any>> = (args) => (
  <div
    css={`
      background-color: red;
    `}
  >
    TEST PAGE
  </div>
);

export const ButtonStory = Template.bind({});
