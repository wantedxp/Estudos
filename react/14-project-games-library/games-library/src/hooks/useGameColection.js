import { useState, useEffect } from "react";

export default function useGameCollection() {
    const [games, setGames] = useState(() => {
        const storedGames = localStorage.getItem("obc-game-lib");
        if (!storedGames) return [];
        return JSON.parse(storedGames);
      });
    
      useEffect(() => {
        localStorage.setItem("obc-game-lib", JSON.stringify(games));
      }, [games]);
    
      const addGame = ({ title, cover }) => {
        const id = Math.floor(Math.random() * 1000000);
        const game = { id, title, cover };
        setGames((state) => [...state, game]);
      };
    
      const removeGame = (id) => {
        setGames((state) => state.filter((game) => game.id !== id));
      };

      return {games, addGame, removeGame}
}

