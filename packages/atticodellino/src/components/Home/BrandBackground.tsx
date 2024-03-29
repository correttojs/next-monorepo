import React from "react";

import styles from "./Home.module.css";

import classNames from "classnames";

export const BrandBackground = () => (
  <div
    className={classNames(styles["bg-brand"], "w-screen h-20 bg-repeat-x")}
  ></div>
);
