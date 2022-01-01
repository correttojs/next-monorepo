// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { ApartmentLink } from "../ApartmentLink";

export default {
  title: "Home/ApartmentLink",
} as Meta;

const Template: Story = (args) => (
  <ApartmentLink backgroundColor="black">Test Link</ApartmentLink>
);

export const ApartmentLinkStory = Template.bind({});
