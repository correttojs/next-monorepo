import Head from "next/head";
import React from "react";

import { PageQuery } from "../../generated/codegen";
import { Header } from "../Header/Header";
import { useRouter } from "next/router";
import { Footer } from "../Footer/Footer";

export const Layout: React.FC<{
  apartment: PageQuery["apartment"];
  links: PageQuery["navigations"];
  isTransparent?: boolean;
}> = ({ children, apartment, links, isTransparent = false }) => {
  const router = useRouter();

  const items = [
    ...links
      .filter((i) => i.link !== "home")
      .map((item) => ({
        title: item.title,
        href: item.link === "contacts" ? "/#contacts" : `/${item.link}`,
        isActive: router.pathname.replace("/", "") === item.link,
      })),
    {
      title: "EN",
      href: "/",
      isActive: false,
      lang: "en",
    },
    {
      title: "DE",
      href: "/",
      isActive: false,
      lang: "de",
    },
  ];

  return (
    <div className=" ">
      <Head>
        <title>{apartment?.name}</title>
      </Head>
      <Header
        isTransparent={isTransparent}
        title={apartment?.name ?? "Home"}
        items={items}
      />

      {children}
      <Footer apartment={apartment} />
    </div>
  );
};
