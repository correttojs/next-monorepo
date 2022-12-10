import React from "react";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: "300",
});
import "@packages/ui/styles/tw-globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html className={roboto.className}>{children}</html>;
}
