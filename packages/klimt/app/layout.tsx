import { Roboto } from "next/font/google";
import "@packages/ui/styles/tw-globals.css";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});
import "@packages/ui/styles/tw-globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={roboto.className}>
      <head>
         <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: 'Klimt',
};