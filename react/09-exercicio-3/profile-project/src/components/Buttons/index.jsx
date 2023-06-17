/* eslint-disable react/prop-types */
import styles from "./styles.module.css"

export default function Buttons(props) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <button className={styles.wrapper}>{props.btnName}</button>
    </a>
  );
}
