import styles from "./styles.module.css";

export default function Status() {
  const status = true;
  const className = status ? styles.on : styles.off;
  return <h2 className={className}>Status: {status ? "ON" : "OFF"} </h2>;
}
