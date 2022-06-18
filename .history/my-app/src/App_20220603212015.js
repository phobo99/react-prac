import "./App.css";
import Counter from "./components/counter/Counter";
import Toggle from "./components/toggle/Toggle";
function App() {
  const name = "Luu Dang Pho";
  return (
    <div>
      {/* <YoutubeList>
        {name} */}
      {/* children: html, component, text, variable */}
      {/* </YoutubeList> */}
      <Toggle></Toggle>
      <Counter></Counter>
    </div>
  );
}
// Props -> Properties

// Rendering list
export default App;
