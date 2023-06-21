import "../src/App.css";
import useCounter from "./hooks/useCounter";

export default function App() {
  const counter = useCounter();

  return (
    <div>
      <button onClick={counter.increment}>{counter.count}</button>
    </div>
  );
}
