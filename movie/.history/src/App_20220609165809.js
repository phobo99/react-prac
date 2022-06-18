import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movie</span>
      </header>
      <section className="banner h-[500px] page-container mb-10">
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://cdn.baogiaothong.vn/upload/images/2019-2/article_img/2019-04-09/avengers-hoi-ket-se-la-bo-phim-co-thoi-luong-dai-nhat-trong-lich-su-dien-anh-cua-marvel-1554826661-width1000height563.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
            </div>
            <button className="px-3 py-6 rounded-lg bg-primary text-white font-medium ">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container">
        <h2 className="capitalize text-white mb-5 text-2xl font-bold">
          Now playing
        </h2>
      </section>
    </Fragment>
  );
}

export default App;
