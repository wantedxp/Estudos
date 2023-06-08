import styles from "./styles.module.css";
import { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  function generatePassword() {
    const items =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*_";
    let newPassword = "";

    for (let i = 0; i < 8; i++) {
      newPassword += items.charAt(Math.random() * items.length);
    }
    setPassword(newPassword);
    setCopied(false);
  }

  function copyPassword() {
    navigator.clipboard.writeText(password);
    setCopied(true);
  }

  return (
    <div className={styles.wrapper}>
      <h2>Gerador de Senhas</h2>
      <div className={styles.btnContainer}>
        <button onClick={generatePassword}>Gerar senha</button>

        <button onClick={copyPassword}>{copied ? "Copiado" : "Copiar"}</button>
      </div>
      <p>{password} </p>
    </div>
  );
}
