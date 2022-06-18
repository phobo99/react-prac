import "./App.css";
import YoutubeItem from "./components/youtube/YoutubeItem";
import { YoutubeData } from "./data";
// JSX: Javascript XML
// ES6
// Babel
// Curly braces {}
// parent component
function App() {
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => {
        let newClass = "";
        if (index === 1) newClass = "abc";
        {
          /* const newClass = index === 1 ? "abc" : ""; */
        }
        return (
          <YoutubeItem
            key={item.id}
            image={item.image || item.avatar}
            avatar={item.avatar || item.image}
            title={item.title || "Learning React course"}
            author={item.author}
            className={newClass}
          ></YoutubeItem>
        );
      })}
      {/* <YoutubeItem
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
      ></YoutubeItem> */}
    </div>
  );
}
// Props -> Properties

// Rendering list
export default App;
