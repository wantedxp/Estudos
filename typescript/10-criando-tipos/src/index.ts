let literal: 'Hello'
let pi: 3.14



const test = 5


// A | é como se fosse o operador lógico "ou" dizendo que a variável pode ter um valor ou o outro no caso Yes, No ou Maybe //
let option: 'Yes' | "No" | "Maybe"
option = "No"

let opt: number | boolean

type Planets = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

let planet: Planets

function checkPlanet(planet:Planets) {
    if (planet === "Terra") {
        console.log("Estamos na terra")
    }
}



type GreetingCallback = (name: string) => void;

const greet = (callbackfn: GreetingCallback) => {
  const name = "Filipe";
  callbackfn(name);
  return name;
};

const nameValue = greet((name) => {})

console.log(nameValue);