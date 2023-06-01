import Dog from "./Dog";
import Greeter from "./Greeter";
import LoginForm from "./LoginForm";
import "./styles.css";
import Die from "./Die";
import DiceRoll from "./DiceRoll";
import RandomPokemon from "./RandomPokemon";

export default function App() {
  return (
    <div className="App">
      {/* <DiceRoll /> */}
      <RandomPokemon />
      <RandomPokemon />
      <RandomPokemon />
    </div>
  );
}
