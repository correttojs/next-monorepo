import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Hero } from "../Hero";

export default {
  title: "Klimt/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

export const HeaderStory: ComponentStory<typeof Hero> = (args) => (
  <div className="m-0 h-screen w-screen bg-gray-500 p-0">
    <Hero headline="Candor" subHeadline="Malcesine - Garda" />
  </div>
);
