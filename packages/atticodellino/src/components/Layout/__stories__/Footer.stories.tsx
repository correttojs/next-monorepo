// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { Footer } from "../Footer";

export default {
  title: "Layout/Footer",
} as Meta;

const Template: Story = (args) => (
  <>
    <Footer />
  </>
);

export const HeaderStory = Template.bind({});
