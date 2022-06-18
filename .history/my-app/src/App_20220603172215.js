import logo from "./logo.svg";
import "./App.css";
// JSX: Javascript XML
// ES6
// Babel
// Curly braces {}
function App() {
  const name = "Pho";
  function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  return (
    <div className="feature">
      <img src="" alt="" className="feature-image" />
      <h3 className="feature-title">Title</h3>
      <p className="feature-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis id
        deserunt fuga facere minima officia veritatis odit, fugiat doloribus
        aliquam amet modi, quaerat sunt error voluptatem cupiditate maiores eos
        obcaecati?
      </p>
    </div>
  );
}

export default App;
