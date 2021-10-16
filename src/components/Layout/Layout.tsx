import Head from "next/head";
import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { PageQuery } from "../../generated/codegen";
import { Header } from "../Header/Header";
import { useRouter } from "next/router";

const queryClient = new QueryClient();

export const Layout: React.FC<{
  title: string;
  links: PageQuery["navigations"];
  isTransparent?: boolean;
}> = ({ children, title, links, isTransparent = false }) => {
  const router = useRouter();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <Header
          isTransparent={isTransparent}
          title={"Home"}
          items={[
            ...links
              .filter((i) => i.link !== "home")
              .map((item) => ({
                title: item.title,
                href: `/${item.link}`,
                isActive: router.pathname.replace("/", "") === item.link,
              })),
            { title: "EN", href: "/en", isActive: false },
            { title: "DE", href: "/", isActive: false },
          ]}
        />

        {children}
        <footer
          className={
            "flex flex-col justify-center justify-items-center items-center w-full h-24 text-white bg-black "
          }
        >
          <p className="opacity-80">© correttoweb 2020</p>
        </footer>
      </div>
    </QueryClientProvider>
  );
};
