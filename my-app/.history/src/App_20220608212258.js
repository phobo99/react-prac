import { Fragment, useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
// import Button from "./components/button/Button";
// import Card from "./components/card/Card";
// import Card2 from "./components/card/Card2";
// import CardList from "./components/card/CardList";
// import Counter from "./components/counter/Counter";
// import Game from "./components/tictactoe/Game";
// import Toggle from "./components/toggle/Toggle";
// import { GlobalStyle } from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";
import CardTailwind from "./components/card/CardTailwind";
import DropdownPortal from "./components/DropdownPortal";
import Modal from "./components/modal/Modal";
// import Header from "./components/Header";
import HackerNews from "./components/news/HackerNews";
import HackerNewsWithReducer from "./components/news/HackerNewsWithReducer";
import Tooltip from "./components/Tooltip";
// import Timer from "./components/Timer";
// import Photos from "./components/photo/Photos";
import { ErrorBoundary } from "react-error-boundary";
import GameWithReducer from "./components/tictactoe/GameWithReducer";
import { AuthProvider } from "./contexts/auth-context";
import HeaderMain from "./components/HeaderMain";
import { GalleryProvider } from "./contexts/gallery-context";
import PhotoList from "./components/gallery/PhotoList";
import CartList from "./components/gallery/CartList";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
// };

function App() {
  // const name = "Luu Dang Pho";\
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      {/* <ThemeProvider theme={theme}></ThemeProvider> */}
      {/* <GlobalStyle></GlobalStyle> */}
      {/* <YoutubeList>
         {name} */}
      {/* children: html, component, text, variable */}
      {/* </YoutubeList> */}
      {/* <Toggle></Toggle> */}
      {/* <Counter></Counter> */}
      {/* <Game></Game> */}
      {/* <Button>Primary</Button>
       <Button secondary>Secondary</Button> */}
      {/* <CardList> */}
      {/* <Card secondary={true}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card> */}
      {/* <Card2></Card2> */}
      {/* <CardTailwind></CardTailwind> */}
      {/* </CardList> */}
      {/* <Photos></Photos> */}
      {/* <Counter></Counter> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      {/* <HackerNews></HackerNews>
      <HackerNewsWithReducer></HackerNewsWithReducer> */}
      {/* <div className="relative z-0">
        <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
      </div>
      <button
        className="p-4 text-white bg-blue-500 rounded-md"
        onClick={() => setShowModal(true)}
      >
        Show modal
      </button>
      <div className="relative z-30">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, quasi
        non. Aliquam accusantium tempore amet nihil neque cupiditate veritatis
        iste accusamus est eius in libero harum, obcaecati eaque! Aspernatur,
        sint.
      </div>
      <div className="p-5 overflow-hidden">
        <DropdownPortal></DropdownPortal>
      </div> */}
      {/* <div className="p-16 mt-16 ml-16 overflow-hidden">
        <Tooltip text="Hover me">this is a tool top content</Tooltip>
      </div> */}
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
        <GameWithReducer></GameWithReducer>
      </ErrorBoundary> */}
      {/* <Modal open={true} handleClose={() => {}}></Modal> */}
      {/* <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
          <CartList></CartList>
        </GalleryProvider>
      </AuthProvider> */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut et
              possimus itaque, laboriosam ad perspiciatis quisquam, tenetur
              quasi laudantium rem molestias? Voluptas consequuntur doloribus
              praesentium rem reiciendis quidem non. Officiis.
            </div>
          }
        ></Route>
      </Routes>
    </Fragment>
  );
}
// Props -> Properties

// Rendering list
export default App;
