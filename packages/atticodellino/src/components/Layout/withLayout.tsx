import { GlobalType } from "@/graphql/_airbn.types";
import React from "react";

import { Contacts } from "./Contact";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { GlobalContext } from "./useGlobal";
import styles from "./Layout.module.css";
import classNames from "classnames";

export const withLayout = (Comp: any) => {
  const Body = (props: { global: GlobalType }) => {
    return (
      <>
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
      </>
    );
  };
  Body.displayName = "Body";
  return Body;
};
