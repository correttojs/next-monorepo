// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { Button } from "../Buttons";

export default {
  title: "UI/Buttons",
} as Meta;

const Template: Story<React.ButtonHTMLAttributes<any>> = (args) => (
  <Button {...args}>Test</Button>
);

export const ButtonStory = Template.bind({});
