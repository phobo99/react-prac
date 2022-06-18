import "./App.css";
import { YoutubeData } from "./YoutubeData";
// JSX: Javascript XML
// ES6
// Babel
// Curly braces {}
// parent component
function App() {
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar}
          title={item.title}
          author={item.author}
        ></YoutubeItem>
      ))}
      <YoutubeItem
        image="https://images.unsplash.com/photo-1654189677800-dffe76b3db4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        avatar="https://images.unsplash.com/photo-1654125490891-c591a5a0c929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        title="Luu Dang Pho"
        author="Pho"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1654190556461-3919acf03f0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        avatar="https://images.unsplash.com/photo-1644982647844-5ee1bdc5b114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1654222963678-3d37d3178ea4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        avatar="https://images.unsplash.com/photo-1654180709575-8d47ae1b2d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        title="Luu Dang Pho"
        author="Pho"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1654190840351-9467f97a0acb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        avatar="https://images.unsplash.com/photo-1654125490891-c591a5a0c929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      ></YoutubeItem>
    </div>
  );
}
// Props -> Properties
function YoutubeItem(props) {
  return (
    <div className="youtube-item">
      <div
        className="youtube-image"
        // style={{
        //   heigh: "250px",
        // }}
      >
        <img
          src={props.image}
          alt=""
          // style={{
          //   display: "block",
          //   maxWidth: "100%",
          //   width: "100%",
          //   objectFit: "cover",
          // }}
        />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">
            {props.title || "this is example of title"}
          </h3>
          <h4 className="youtube-author">
            {props.title || "this is example of author"}
          </h4>
        </div>
      </div>
    </div>
  );
}
// Rendering list
export default App;
