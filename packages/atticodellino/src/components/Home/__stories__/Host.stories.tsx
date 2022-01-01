// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { Host } from "../Host";
import { SampleText } from "./sampletext";

export default {
  title: "Home/Host",
} as Meta;

const Template: Story = (args) => (
  <Host
    reviews={3}
    srcImage={
      "https://a0.muscache.com/im/pictures/user/8fa9dec6-3e24-4d38-967e-2ec7e5c85cdd.jpg?aki_policy=profile_x_medium"
    }
    about={SampleText}
  />
);

export const HostStory = Template.bind({});
