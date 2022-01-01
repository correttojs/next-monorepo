// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { Header } from "../Header";

export default {
  title: "Layout/Header",
} as Meta;

const Template: Story = (args) => (
  <>
    <Header />
  </>
);

export const HeaderStory = Template.bind({});
