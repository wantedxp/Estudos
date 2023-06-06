/* eslint-disable react/prop-types */
import styles from './styles.module.css'

export default function Title({ name }) {
    return (
        <h2 className={styles.wrapper}>{name}</h2>
    )
}