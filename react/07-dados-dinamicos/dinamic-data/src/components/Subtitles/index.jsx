import styles from "./styles.module.css";

export default function Subtitle() {
  function sum(a, b) {
    return a + b;
  }
  return <h2 className={styles}>It`s easy, like 1 + 1 = {sum(1, 1)}</h2>;
}
