import { useState } from "react";

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";

import "./App.css";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Cres");

  function addTodo(text, category) {
    const newTodo = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodo);
  }

  function removeTodo(id) {
    const newTodos = [...todos];
    const fillteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(fillteredTodos);
  }

  function completeTodo(id) {
    const newTodo = [...todos];
    newTodo.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodo);
  }

  return (
    <div className="app">
      <div className="todo-list">
        <h1>Lista de Tarefas</h1>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Cres"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
