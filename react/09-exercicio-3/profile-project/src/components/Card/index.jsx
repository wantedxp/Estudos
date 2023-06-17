/* eslint-disable react/prop-types */
import Buttons from "../Buttons";
import Title from "../Title";
import styles from "./styles.module.css";

const githubUrl = "https://github.com/wantedxp";
const linkedinUrl = "https://www.linkedin.com/in/filipe-campos-524a82256/";
const instagramUrl = "https://www.instagram.com/flp.campos/";

export default function Card(props) {
  function followClick() {
    alert(`Seguindo ${props.name}`);
  }
  return (
    <div className={styles.cardContainer}>
      <div>
        <img src={props.avatar} alt={props.name} />
      </div>
      <Title>
        <span>{props.name}</span>
        <button onClick={followClick}>Follow</button>
      </Title>
      <p>{props.bio}</p>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      <div className={styles.btnContainer}>
        <Buttons href={githubUrl} btnName={"GitHub"} />
        <Buttons href={linkedinUrl} btnName={"LinkedIn"} />
        <Buttons href={instagramUrl} btnName={"Instagram"} />
      </div>
    </div>
  );
}
