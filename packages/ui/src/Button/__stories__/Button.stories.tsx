// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { Button } from "../Button";

export default {
  title: "UI/Button",
} as Meta;

export const Buttons: Story = (args) => <Button color="blue">Test</Button>;
