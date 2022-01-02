// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Loading } from "../Loading";

export default {
  title: "UI/Loading",
} as Meta;

export const ButtonLoadingStory = () => <Loading />;
