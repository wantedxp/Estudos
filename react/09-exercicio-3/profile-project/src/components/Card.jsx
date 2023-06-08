/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import Title from "./Title";
import styles from "./card.module.css";
import ProfileSection from "./Profile/ProfileSection";
import LinkButtons from "./LinkButtons";
import { useState } from "react";

export default function Card(props) {
  const [followText, setFollowText] = useState("Follow");

  function handleClick() {
    alert(`Following ${props.name}`);
    setFollowText("Following");
  }
  return (
    <div className={styles.container}>
      <img src={props.avatar} alt={props.name} />
      <Title>
        {props.name}
        <button onClick={handleClick} className={styles.followBtn}>
          {followText}
        </button>
      </Title>
      <div className={styles.btn}>
        <ProfileSection>
          <p>{props.bio}</p>
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </ProfileSection>
        <ProfileSection
          className={styles.links}
          id="links-section"
          data-test="some value"
          aria-label="social links"
        >
          <LinkButtons href={props.githubUrl}>GitHub</LinkButtons>
          <LinkButtons href={props.linkedinUrl}>LinkedIn</LinkButtons>
          <LinkButtons href={props.instagramUrl}>Instagram</LinkButtons>
        </ProfileSection>
      </div>
    </div>
  );
}
