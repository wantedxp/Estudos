import Status from "./components/Status";
import Subtitle from "./components/Subtitles";
import Title from "./components/Title";

import styles from "./App.module.css"

export default function App() {
  return (
    <div 
    className={styles.app}>
      <Title />
      <Subtitle />
      <Status />
    </div>
  );
}
