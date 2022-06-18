import "./App.css";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
import Counter from "./components/counter/Counter";
import Game from "./components/tictactoe/Game";
import Toggle from "./components/toggle/Toggle";
function App() {
  const name = "Luu Dang Pho";
  return (
    <div>
      {/* <YoutubeList>
        {name} */}
      {/* children: html, component, text, variable */}
      {/* </YoutubeList> */}
      {/* <Toggle></Toggle> */}
      {/* <Counter></Counter> */}
      {/* <Game></Game> */}
      {/* <Button>Primary</Button>
      <Button secondary>Secondary</Button> */}
      <CardList></CardList>
    </div>
  );
}
// Props -> Properties

// Rendering list
export default App;
