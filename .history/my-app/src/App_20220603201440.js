import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";
function App() {
  const name = "Luu Dang Pho";
  return (
    <div>
      <YoutubeList>
        {name}
        {/* children: html, component, text, variable */}
      </YoutubeList>
    </div>
  );
}
// Props -> Properties

// Rendering list
export default App;
