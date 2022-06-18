import logo from "./logo.svg";
import "./App.css";
// JSX: Javascript XML
// ES6
// Babel
// Curly braces {}
function Feature() {
  return (
    <div className="feature">
      <img src="" alt="" className="feature-image" />
      <h3 className="feature-title">Title2</h3>
      <p className="feature-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis id
        deserunt fuga facere minima officia veritatis odit, fugiat doloribus
        aliquam amet modi, quaerat sunt error voluptatem cupiditate maiores eos
        obcaecati?
      </p>
    </div>
  );
}
function App() {
  const name = "Pho";
  function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  return (
    <div>
      <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature>
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h1>Hello {name === "Pho" ? "Pho" : "Ban"}</h1>
  //       <h2>{fullName("Luu Dang", "Pho")}</h2>
  //       {/* <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p> */}
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
