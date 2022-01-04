// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

const img = require("./promo-garda.webp");
import { Card, CardHorizontal } from "../Card";

export default {
  title: "UI/Card",
} as Meta;

const Template: Story<React.ButtonHTMLAttributes<any>> = (args) => (
  <>
    <div className="flex">
      <Card
        onClick={() => {}}
        title={"L'attico del Lino Garda"}
        // message={"Test message"}
        img={img}
        {...args}
      ></Card>
    </div>{" "}
    <div className="flex">
      <CardHorizontal
        onClick={() => {}}
        title={"L'attico del Lino Garda"}
        message={"Test message"}
        img={img}
      />
    </div>
  </>
);

export const CardStory = Template.bind({});
