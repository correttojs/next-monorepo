import { GlobalType } from "@/graphql/_airbn.types";
import { queryClient } from "@correttojs/next-utils/useReactQuery";
import React from "react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Contacts } from "./Contact";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { GlobalContext } from "./useGlobal";
import styles from "./Layout.module.scss";
import classNames from "classnames";

export const withLayout = (Comp: any) => {
  const Body = (props: { global: GlobalType }) => {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalContext.Provider value={props.global}>
            <div className="flex flex-col items-center">
              <Header />
              <div
                className={classNames(
                  styles["layout-contact"],
                  "fixed w-full bg-white md:hidden"
                )}
              >
                <Contacts direction="row" />
              </div>
              <div className={styles["comp-wrapper"]}>
                <Comp {...props}></Comp>
              </div>
              <Footer />
            </div>
          </GlobalContext.Provider>
        </QueryClientProvider>
      </>
    );
  };
  Body.displayName = "Body";
  return Body;
};
