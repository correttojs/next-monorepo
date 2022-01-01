// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

const pics = [];
pics.push(require("./1.jpg"));
pics.push(require("./2.jpg"));
pics.push(require("./3.jpg"));

import { Hero } from "../NewHero";

export default {
  title: "Home/NewHero",
} as Meta;

const photos: any[] = [];
for (let i = 1; i < 12; i++) {
  photos.push({
    id: i,
    picture: pics[i % 3],
    x_large_cover: pics[i % 3],
    caption: `pic${i}`,
  });
}
photos[0].id = 406200537;
photos[1].id = 406200123;

const Template: Story = (args) => (
  <>
    <Hero photos={photos} />
  </>
);

export const HeroStory = Template.bind({});
