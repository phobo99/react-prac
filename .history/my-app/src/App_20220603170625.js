import logo from "./logo.svg";
import "./App.css";
// JSX: Javascript XML
// ES6
// Babel
/**
 * element = <div id="root">Hello world</div>: JSX
 * element = React.createElement('div',{id: 'root'},'Hello world')
 * function createElement(elementType,props,... children)
 * elementType: 'div' 'p' 'span'
 * props: className, id, src, alt ...
 * ...children:
 * element2 = (<div>
 * <span>Hello</span> <span>World</span>
 * </div>)
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
