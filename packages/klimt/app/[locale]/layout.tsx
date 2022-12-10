import React from "react";

import { getLayout } from "../../src/server/pageProps/getLayout";
import { Locale } from "../../src/generated/codegen";
import { Header } from "./_layout/Header";

import "@packages/ui/styles/tw-globals.css";
import { TranslationsProvider } from "./_layout/TranslationContext";
import { Footer } from "./_layout/Footer/Footer";
import { ParamsTypes } from "./_layout/types";

export async function generateStaticParams() {
  return [
    {
      locale: "en",
    },
    {
      locale: "de",
    },
  ];
}

export default async function RootLayout({
  children,
  params,
}: ParamsTypes & {
  children: React.ReactNode;
}) {
  const { links, apartment, translations } = await getLayout({
    locale: params.locale,
  });
  const items = [
    ...links
      .filter((i) => i.link !== "home")
      .map((item) => ({
        title: item.title,
        href:
          item.link === "contacts"
            ? `/${params.locale}#contacts`
            : `/${params.locale}/${item.link}`,
      })),
    {
      title: "EN",
      href: `/${params.locale}`,
      isActive: false,
      lang: "en",
    },
    {
      title: "DE",
      href: `/${params.locale}`,
      isActive: false,
      lang: "de",
    },
  ];

  return (
    <>
      <head>
        <title>{apartment?.name}</title>
      </head>
      <body>
        <TranslationsProvider translations={translations}>
          <Header title={apartment?.name ?? "Home"} items={items} />
          {children}
          <Footer params={params} apartment={apartment} />
        </TranslationsProvider>
      </body>
    </>
  );
}
