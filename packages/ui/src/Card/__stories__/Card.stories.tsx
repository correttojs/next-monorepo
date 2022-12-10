/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Flex } from "@packages/ui/Flex";
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require("./promo-garda.webp");
import { Card, CardHorizontal } from "../Card";

export default {
  title: "UI/Card",
} as Meta;

const Template: Story<React.ButtonHTMLAttributes<any>> = (args) => (
  <Flex gap={2} direction="column" align="start">
    <Card
      onClick={() => {}}
      title={"L'attico del Lino Garda"}
      // message={"Test message"}
      img={img}
      {...args}
    ></Card>
    <CardHorizontal
      onClick={() => {}}
      title={"L'attico del Lino Garda"}
      message={"Test message"}
      img={img}
    />
  </Flex>
);

export const CardStory = Template.bind({});
