/* eslint-disable react/prop-types */
import styles from "../styles.module.css";
import Button from "./Button";

function Card({ title, cardImg, text }) {
  return (
    <div>
      <div className={styles.container}>
        <img src={cardImg} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
          <Button className={styles.btn} />
        </div>
      </div>
    </div>
  );
}

export default Card;
