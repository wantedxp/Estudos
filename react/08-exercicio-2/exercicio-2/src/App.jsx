import styles from "./App.module.css";
import Card from "./components/Card";

import ds1Img from "./assets/JxilRmpXkS3CCXUnr0gZTBOlqso3plaw.jpg";
import ds2Img from "./assets/dark-souls-2.jpg";
import ds3Img from "./assets/dark-souls-3.jpg";

export default function App() {
  return (
    <div className={styles.app}>
      <Card
        cardImg={ds1Img}
        title={"Dark Souls Rematered"}
        text={"Dark souls 1 descprition"}
      />
      <Card
        cardImg={ds2Img}
        title={"Dark Souls 2"}
        text={"Dark souls 2 descprition"}
      />
      <Card
        cardImg={ds3Img}
        title={"Dark Souls 3"}
        text={"Dark souls 3 descprition"}
      />
    </div>
  );
}
