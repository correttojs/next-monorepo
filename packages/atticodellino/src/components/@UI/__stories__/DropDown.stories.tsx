// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { DropDown, DropDownItem } from "../DropDown";

export default {
  title: "UI/DropDown",
} as Meta;

const Template: Story<React.ButtonHTMLAttributes<any>> = (args) => (
  <div className="flex flex-row">
    <DropDown>
      <DropDownItem text="Deutsch" onClick={() => console.log("de")} />
      <DropDownItem text="English" onClick={() => console.log("en")} />
    </DropDown>
  </div>
);

export const DropDownStory = Template.bind({});
