import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "../Header";

export default {
  title: "Klimt/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const HeaderStory: ComponentStory<typeof Header> = (args) => (
  <div className="m-0 h-screen w-screen bg-gray-500 p-0">
    <Header
      items={[
        { title: "Active", href: "/", isActive: true },
        { title: "InActive", href: "/", isActive: false },
        { title: "InActive", href: "/", isActive: false },
      ]}
      title="Candor"
      isTransparent={false}
      className={"absolute "}
    />

    <Header
      items={[
        { title: "Active", href: "/", isActive: true },
        { title: "InActive", href: "/", isActive: false },
        { title: "InActive", href: "/", isActive: false },
      ]}
      title="Candor"
      isTransparent={true}
      className={"absolute top-24 "}
    />

    <Header
      items={[
        { title: "Active", href: "/", isActive: true },
        { title: "InActive", href: "/", isActive: false },
        { title: "InActive", href: "/", isActive: false },
      ]}
      title="Candor"
      isTransparent={true}
      className={"absolute top-44 "}
      isOpen={true}
    />
  </div>
);
