import "./index.css";
import GameForm from "./components/GameForm";
import useGameCollection from "./hooks/useGameColection";
import GameList from "./components/GameList";

export default function App() {
  const { games, addGame, removeGame } = useGameCollection();
  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <div className="lib-form">
        <GameForm addGame={addGame} />
        <GameList games={games} removeGame={removeGame}/>
      </div>
    </div>
  );
}
