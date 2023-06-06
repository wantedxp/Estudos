/* eslint-disable react/prop-types */
import styles from './card.module.css'

export default function Card({ avatar, name, bio, email, phone, githubUrl, linkedinUrl, instagramUrl }) {
    return (
        <div className={styles.container}>
            <img src={avatar} alt={name} />
            <h2>{name}</h2>
            <p>{bio}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <div className={styles.btn}>
                <a href={githubUrl} target='_blank' rel="noreferrer">GITHUB</a>
                <a href={linkedinUrl} target='_blank' rel="noreferrer">LINKEDIN</a>
                <a href={instagramUrl} target='_blank' rel="noreferrer">INSTAGRAM</a>
            </div>
        </div>
    )
}