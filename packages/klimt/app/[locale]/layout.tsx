import React from "react";

import { Header } from "./_layout/Header";

import { TranslationsProvider } from "./_layout/TranslationContext";
import { Footer } from "./_layout/Footer/Footer";
import { ParamsTypes } from "./_layout/types";
import { getLayout } from "./_layout/getLayout";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { setTranslationsStore } from "./_layout/translationStore";

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

export async function generateMetadata({
  params,
}: ParamsTypes): Promise<Metadata> {
  const { apartment } = await getLayout(params.locale);
  return { title: apartment?.name };
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
      href: `/en`,
      isActive: false,
      lang: "en",
    },
    {
      title: "DE",
      href: `/de`,
      isActive: false,
      lang: "de",
    },
  ];
  setTranslationsStore(translations);

  return (
    <TranslationsProvider translations={translations}>
      <Header title={apartment?.name ?? "Home"} items={items} />
      {children}
      <Footer params={params} apartment={apartment} />
    </TranslationsProvider>
  );
}
