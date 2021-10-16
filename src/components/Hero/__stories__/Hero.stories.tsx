import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Hero } from "../Hero";

export default {
  title: "Components/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

export const HeaderStory: ComponentStory<typeof Hero> = (args) => (
  <div className="p-0 m-0 w-screen h-screen bg-gray-500">
    <Hero title="Candor" />
  </div>
);
