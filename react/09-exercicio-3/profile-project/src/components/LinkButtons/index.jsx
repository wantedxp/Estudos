/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

export default function LinkButtons(props) {
  return (
    <div className={styles.wrapper}>
      <a href={props.href} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    </div>
  );
}
