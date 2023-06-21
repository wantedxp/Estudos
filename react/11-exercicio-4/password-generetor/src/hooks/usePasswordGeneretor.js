import {useState} from "react"

export default function usePasswordGeneretor() {
  const [textPassword, setTextPassword] = useState("");

  function randonPassword() {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX0123456789";

    let textPassword = "";

    for (let i = 0; i < 8; i++) {
      textPassword += characters[Math.floor(Math.random() * characters.length)];
    }
    setTextPassword(textPassword);
  }

  return { textPassword, randonPassword}
}