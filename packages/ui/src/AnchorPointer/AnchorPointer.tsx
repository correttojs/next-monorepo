import styles from "./AnchorPointer.module.css";
import React from "react";
import classNames from "classnames";

export const AnchorPointer: React.FC<
  React.PropsWithChildren<{ id: string }>
> = ({ id }) => (
  <span
    id={id}
    className={classNames(styles.anchorPointer, "invisible block relative")}
  />
);
