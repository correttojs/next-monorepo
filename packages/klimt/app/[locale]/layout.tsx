import React from "react";

import { Header } from "./_layout/Header/Header";

import { TranslationsProvider } from "./_layout/TranslationContext";
import { Footer } from "./_layout/Footer/Footer";
import { ParamsTypes } from "./_layout/types";
import { getLayout } from "./_layout/getLayout";
import { notFound } from "next/navigation";

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
  if (!["en", "de"].includes(params.locale)) {
    notFound();
  }
  const { navigations, apartment, translations } = await getLayout(
    params.locale
  );

  const items = [
    ...navigations
      .filter((i) => i.link !== "home")
      .map((item) => ({
        title: item.title,
        href:
          item.link === "contacts"
            ? `/${params.locale}/#contacts`
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
    <div>
      <TranslationsProvider translations={translations}>
        <Header title={apartment?.name ?? "Home"} items={items} />
        {children}
        <Footer params={params} apartment={apartment} />
      </TranslationsProvider>
    </div>
  );
}
