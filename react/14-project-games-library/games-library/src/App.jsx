import "./index.css";
import GameForm from "./components/GameForm";
import Games from "./components/Games";
import useGameCollection from "./hooks/useGameColection";

export default function App() {
  const { games, addGame, removeGame } = useGameCollection();
  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <div className="lib-form">
        {" "}
        <GameForm addGame={addGame} />
      </div>
      <div className="library">
        {" "}
        <div className="games">
          {games.map((game) => (
            <Games
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removeGame(game.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
