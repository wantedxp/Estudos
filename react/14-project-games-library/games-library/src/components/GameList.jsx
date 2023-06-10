import PropTypes from "prop-types";
import Games from "./Games";

GameList.propTypes = {
  games: PropTypes.array,
  removeGame: PropTypes.func,
};

export default function GameList({ games, removeGame }) {
  return (
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
  );
}
