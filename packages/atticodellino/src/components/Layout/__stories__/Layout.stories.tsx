process.env.NEXT_PUBLIC_FROM_EMAIL = "test@email.com";
process.env.NEXT_PUBLIC_PHONE = "+39123456";

import { withLayout } from "@/components/Layout";
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

export default {
  title: "AtticoDelLino/Layout",
} as Meta;

const Comp = withLayout(() => <div>TEST BODY</div>);

const Template: Story = (args) => (
  <div>
    <Comp
      global={{
        apartment: "GARDA",
        lang: "it",
        langs: ["it", "en"],
      }}
    />
  </div>
);

export const LayoutStory = Template.bind({});
