import { expect } from "@storybook/jest";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { Button } from "../ButtonBase";
import { MdSync } from "react-icons/md";
import { ButtonSquare } from "@packages/ui/Button/ButtonSquare";
import { screen, userEvent } from "@storybook/testing-library";

export default {
  title: "UI/Button",
} as Meta;

export const Buttons: Story = (args) => (
  <div>
    <Button
      colorClasses={["bg-green-800", "border-blue-800"]}
      hoverColorClasses={["hover:border-white", "hover:text-amber-800"]}
      marginClasses={["m-4"]}
      onClick={() => {
        console.log("hello");
      }}
    >
      Default Button
    </Button>
    <Button
      colorClasses={["bg-green-800", "border-blue-800"]}
      hoverColorClasses={["hover:border-cyan-800", "hover:text-amber-800"]}
      marginClasses={["m-4"]}
    >
      Inverted
    </Button>
    <Button
      colorClasses={["bg-green-800", "border-blue-800"]}
      hoverColorClasses={["hover:border-cyan-800", "hover:text-amber-800"]}
      marginClasses={["m-4"]}
      size={"S"}
    >
      Small
    </Button>
    <Button
      colorClasses={["bg-green-800", "border-blue-800"]}
      hoverColorClasses={["hover:border-cyan-800", "hover:text-amber-800"]}
      marginClasses={["m-4"]}
      Icon={<MdSync />}
    >
      With Icon
    </Button>
    <ButtonSquare className="m-4">Square</ButtonSquare>
  </div>
);

Buttons.play = async () => {
  const button = screen.getByText("Default Button");

  await userEvent.click(button);
  await expect(false).toBeTruthy();
};
