import { useState } from "react";
import "./index.css";
import NumberInput from "./components/NumberInput";

export default function App() {
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("Copiar");
  const [passwordSize, setPasswordSize] = useState(8);

  function generate() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newPassword = "";

    for (let i = 0; i < passwordSize; i++) {
      newPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(newPassword);
    setCopy("Copiar");
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(password);
    setCopy("Copiado");
  }

  return (
    <div className="App">
      <h1>Gerador de senhas</h1>
      <label htmlFor="passwordSize">Tamanho: </label>
      <NumberInput
        passwordSize={passwordSize}
        setPasswordSize={setPasswordSize}
      />
      <button onClick={generate}>
        Gerar senha de {passwordSize} caracteres
      </button>
      <button onClick={copyToClipboard}>{copy}</button>
      <div>{password}</div>
    </div>
  );
}
