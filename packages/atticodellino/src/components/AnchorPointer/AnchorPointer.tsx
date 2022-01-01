import styles from "./AnchorPointer.module.css";

export const AnchorPointer: React.FC<{ id: string }> = ({ id }) => (
  <span id={id} className={styles.anchorPointer} />
);
