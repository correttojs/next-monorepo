import styles from "./AnchorPointer.module.scss";

export const AnchorPointer: React.FC<{ id: string }> = ({ id }) => (
  <span id={id} className={styles.anchorPointer} />
);
