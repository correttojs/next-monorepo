import Head from "next/head";
import React from "react";

import { getLayout } from "../src/server/pageProps/getLayout";
import { Locale } from "../src/generated/codegen";
import { Roboto } from "@next/font/google";
import { Header } from "./Layout/Header";

import "@packages/ui/styles/tw-globals.css";

const roboto = Roboto({
  weight: "300",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { links, apartment } = await getLayout({ locale: Locale.De });
  const items = [
    ...links
      .filter((i) => i.link !== "home")
      .map((item) => ({
        title: item.title,
        href: item.link === "contacts" ? "/#contacts" : `/${item.link}`,
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
    <html className={roboto.className}>
      <Head>
        <title>{apartment?.name}</title>
      </Head>
      <body>
        <Header title={apartment?.name ?? "Home"} items={items} />
        {children}
      </body>
    </html>
  );
}
