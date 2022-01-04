import styles from "./AnchorPointer.module.css";
import React from "react";

export const AnchorPointer: React.FC<{ id: string }> = ({ id }) => (
  <span id={id} className={styles.anchorPointer} />
);
