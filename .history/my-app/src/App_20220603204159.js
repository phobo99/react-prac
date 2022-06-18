import "./App.css";
import Toggle from "./components/state/Toggle";
import YoutubeList from "./components/youtube/YoutubeList";
function App() {
  const name = "Luu Dang Pho";
  return (
    <div>
      {/* <YoutubeList>
        {name} */}
      {/* children: html, component, text, variable */}
      {/* </YoutubeList> */}
      <Toggle></Toggle>
    </div>
  );
}
// Props -> Properties

// Rendering list
export default App;
