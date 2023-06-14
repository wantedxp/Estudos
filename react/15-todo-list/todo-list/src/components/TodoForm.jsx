/* eslint-disable react/prop-types */
import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!value || !category) return;

    addTodo(value, category);
    setValue("");
    setCategory("");
  }

  return (
    <div className="todo-form">
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Digite o titulo"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar Tarefa </button>
      </form>
    </div>
  );
}
