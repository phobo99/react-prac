import logo from "./logo.svg";
import "./App.css";
// JSX: Javascript XML
// ES6
// Babel
// Curly braces {}
function App() {
  const name = "Pho";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {name === "Pho" ? "Pho dep trai" : "Ban"}</h1>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
