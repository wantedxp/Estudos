import Card from "./components/Card";
import avatarImg from "../public/martinez.jpg"
import "./index.css"

export default function App() {
  return (
    <div className="app">
      <Card 
      avatar={avatarImg} 
      name={"Filipe Campos"} 
      bio={"Front End Developer"} phone={"31 99422-1594"} 
      email={"flp.campos94@gmail.com"}/>

    </div>
  );
}
