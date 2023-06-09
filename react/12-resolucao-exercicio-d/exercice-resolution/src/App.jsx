import { useState } from "react";
import "./index.css";
import NumberInput from "./components/NumberInput";

export default function App() {
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("Copiar");
  const [customSize, setCustomSize] = useState(8);
  const [showInput, setShowInput] = useState(false);
  const passwordSize = showInput ? customSize : 8

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
      <div>
        <label htmlFor="showInput" id="showInput">
          Customizar tamanho
        </label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput((currentState) => !currentState)}
        />
      </div>
      {showInput ? (<div>
        <label htmlFor="passwordSize">Tamanho: </label>
        <NumberInput
          passwordSize={customSize}
          setPasswordSize={setCustomSize}
        />
      </div>) : null}
      
      <button onClick={generate}>
        Gerar senha de {passwordSize} caracteres
      </button>
      <button onClick={copyToClipboard}>{copy}</button>
      <div>{password}</div>
    </div>
  );
}
