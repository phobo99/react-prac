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
// parent component
function App() {
  // const name = "Pho";
  // function fullName(firstName, lastName) {
  //   return `${firstName} ${lastName}`;
  // }
  return (
    <div>
      {/* children component*/}
      {/* <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature> */}
      <YoutubeItem
        image="https://images.unsplash.com/photo-1654189677800-dffe76b3db4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        avatar="https://images.unsplash.com/photo-1654125490891-c591a5a0c929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        title="Luu Dang Pho"
        author="Pho"
      ></YoutubeItem>
      {/* <YoutubeItem image="https://images.unsplash.com/photo-1654179474196-38ac05d5992e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></YoutubeItem> */}
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
// Props -> Properties
function YoutubeItem(props) {
  console.log(props);
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">{props.title}</h3>
          <h4 className="youtube-author">{props.title}</h4>
        </div>
      </div>
    </div>
  );
}
export default App;
