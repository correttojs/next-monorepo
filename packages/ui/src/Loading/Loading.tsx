import styles from "./Loading.module.css";
import React from "react";
import classNames from "classnames";

export const Loading = () => {
  return (
    <div className={classNames(styles.loading, "my-8")}>
      <div></div>
      <div></div>
    </div>
  );
};
