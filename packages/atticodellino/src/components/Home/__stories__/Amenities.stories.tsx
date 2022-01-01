// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { Amenities } from "../Amenities";

export default {
  title: "Home/Amenities",
} as Meta;

const Template: Story = () => (
  <>
    <Amenities
      amenities={[
        { name: "Kitchen" },
        { name: "Wifi" },
        { name: "Breakfast" },
        { name: "Iron" },
        { name: "Hangers" },
        { name: "Hair dryer" },
        { name: "Shampoo" },
        { name: "Washer" },
        { name: "TV" },
        { name: "Laptop-friendly workspace" },
        { name: "Heating" },
      ]}
    />
  </>
);

export const AmenitiesStory = Template.bind({});
