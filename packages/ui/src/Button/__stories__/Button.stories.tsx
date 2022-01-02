// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { Button } from "../Button";
import { MdSync } from "react-icons/md";
import { ButtonSquare } from "@packages/ui/Button/ButtonSquare";

export default {
  title: "UI/Button",
} as Meta;

export const Buttons: Story = (args) => (
  <div>
    <Button className="m-4">Default</Button>
    <Button className="m-4" isInverted={true}>
      Inverted
    </Button>
    <Button className="m-4" size={"S"}>
      Small
    </Button>
    <Button className="m-4" Icon={<MdSync />}>
      With Icon
    </Button>
    <ButtonSquare className="m-4">Square</ButtonSquare>
  </div>
);
