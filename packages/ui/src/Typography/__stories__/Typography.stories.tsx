// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { H1, H2, P, H3, Span } from "../Typography";

export default {
  title: "UI/Typography",
} as Meta;

export const Typography: Story<React.ButtonHTMLAttributes<unknown>> = () => {
  return (
    <div>
      <H1 className="text-red-800">{"TEST H1"}</H1>
      <H2 className="text-blue-800">Test Title H2</H2>
      <H3 className="text-green-800">Test Title H2</H3>
      <P>
        {`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.`}
      </P>
      <Span className="text-yellow-800">Test Span</Span>
    </div>
  );
};
