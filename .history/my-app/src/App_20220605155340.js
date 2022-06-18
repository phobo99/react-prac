import "./App.scss";
// import Button from "./components/button/Button";
// import Card from "./components/card/Card";
// import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
// import Counter from "./components/counter/Counter";
// import Game from "./components/tictactoe/Game";
// import Toggle from "./components/toggle/Toggle";
// import { GlobalStyle } from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";
import CardTailwind from "./components/card/CardTailwind";
import Photos from "./components/photo/Photos";
const theme = {
  colors: {
    blue: "#2979ff",
  },
};

function App() {
  // const name = "Luu Dang Pho";
  return (
    <div>
      {/* <ThemeProvider theme={theme}></ThemeProvider> */}
      {/* <GlobalStyle></GlobalStyle> */}
      {/* <YoutubeList>
         {name} */}
      {/* children: html, component, text, variable */}
      {/* </YoutubeList> */}
      {/* <Toggle></Toggle> */}
      {/* <Counter></Counter> */}
      {/* <Game></Game> */}
      {/* <Button>Primary</Button>
       <Button secondary>Secondary</Button> */}
      {/* <CardList> */}
      {/* <Card secondary={true}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card> */}
      {/* <Card2></Card2> */}
      {/* <CardTailwind></CardTailwind> */}
      {/* </CardList> */}
      <Photos></Photos>
    </div>
  );
}
// Props -> Properties

// Rendering list
export default App;
