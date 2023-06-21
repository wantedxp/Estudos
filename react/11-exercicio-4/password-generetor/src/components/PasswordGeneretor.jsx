import usePasswordGeneretor from "../hooks/usePasswordGeneretor";
import useCopyButton from "../hooks/useCopyButton";
import { useState } from "react";

export default function PasswordGeneretor() {
  const { textPassword, randonPassword } = usePasswordGeneretor();

  const {handleClick, resetBtn } = useCopyButton();

  const [isCopied, setIsCopied] = useState("Copiar");

  function handleGenerateClick() {
    randonPassword();
    setIsCopied("Copiar");
    resetBtn;
  }

  function handleCopyClick() {
    handleClick(textPassword);
    setIsCopied("Copiado");
  }

  return (
    <div>
      <button onClick={handleGenerateClick}>Gerar senha</button>
      <button onClick={handleCopyClick}>
        {isCopied}
      </button>
      <p>{textPassword}</p>
    </div>
  );
}
