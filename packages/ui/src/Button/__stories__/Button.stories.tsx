// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { MdSync } from "react-icons/md";
import { screen, userEvent } from "@storybook/testing-library";
import { Button } from "../Button";
import { Flex } from "@packages/ui/Flex";

export default {
  title: "UI/Button",
} as Meta;

export const Buttons: Story = () => (
  <Flex gap="2" direction="column">
    <Button
      color="sky"
      onClick={() => {
        // eslint-disable-next-line no-console
        console.log("hello");
      }}
    >
      Sky Button
    </Button>
    <Button
      color="inverted"
      onClick={() => {
        // eslint-disable-next-line no-console
        console.log("hello");
      }}
    >
      Sky Inverted Button
    </Button>
    <Button color="sky" Icon={<MdSync />}>
      With Icon
    </Button>
    <Button
      color="black"
      onClick={() => {
        // eslint-disable-next-line no-console
        console.log("hello");
      }}
    >
      Black Button
    </Button>
  </Flex>
);

Buttons.play = async () => {
  const button = screen.getByText("Default Button");
  await userEvent.click(button);
};
