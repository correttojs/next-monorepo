// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import tw from "twin.macro";
const img = require("../../../../public/images/promo-garda.webp");
const imgVr = require("../../../../public/images/promo-vr.webp");
import { Card, CardHorizontal } from "../Card";

export default {
  title: "UI/Card",
} as Meta;

const Template: Story<React.ButtonHTMLAttributes<any>> = (args) => (
  <div css={tw`flex`}>
    <Card
      onClick={() => {}}
      title={"L'attico del Lino Garda"}
      // message={"Test message"}
      img={img}
      {...args}
    ></Card>
    <Card
      onClick={() => {}}
      title={"L'attico del Lino Verona"}
      // message={"Test message"}
      img={imgVr}
      {...args}
    ></Card>
  </div>
);

export const CardStory = Template.bind({});

export const CardHorizontalStory = () => (
  <div css={tw`flex`}>
    <CardHorizontal
      onClick={() => {}}
      title={"L'attico del Lino Garda"}
      message={"Test message"}
      img={img}
    />
  </div>
);
