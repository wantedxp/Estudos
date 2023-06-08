/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import Title from "./Title";
import styles from "./card.module.css";
import ProfileSection from "./Profile/ProfileSection";
import LinkButtons from "./LinkButtons";

export default function Card(props) {
  return (
    <div className={styles.container}>
      <img src={props.avatar} alt={props.name} />
      <Title>{props.name}</Title>
      <div className={styles.btn}>
        <ProfileSection>
          <p>{props.bio}</p>
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </ProfileSection>
        <LinkButtons href={props.githubUrl}>GitHub</LinkButtons>
        <LinkButtons href={props.linkedinUrl}>LinkedIn</LinkButtons>
        <LinkButtons href={props.instagramUrl}>Instagram</LinkButtons>
      </div>
    </div>
  );
}
