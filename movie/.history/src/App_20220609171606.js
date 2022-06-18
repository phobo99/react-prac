import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./components/movies/MovieCard";
import "swiper/scss";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movie</span>
      </header>
      <section className="banner h-[500px] page-container mb-20">
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
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Now playing
        </h2>
        <div className="movie-list">
          <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
            <SwiperSlide>
              <MovieCard></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard></MovieCard>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Top rated
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10 ">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
            <img
              src="https://cdn.baogiaothong.vn/upload/images/2019-2/article_img/2019-04-09/avengers-hoi-ket-se-la-bo-phim-co-thoi-luong-dai-nhat-trong-lich-su-dien-anh-cua-marvel-1554826661-width1000height563.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className=" text-xl font-bold mb-3">Spiderman: Homecoming</h3>
            <div className="flex items-center justify-between text-sm opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Trending
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10 ">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
            <img
              src="https://cdn.baogiaothong.vn/upload/images/2019-2/article_img/2019-04-09/avengers-hoi-ket-se-la-bo-phim-co-thoi-luong-dai-nhat-trong-lich-su-dien-anh-cua-marvel-1554826661-width1000height563.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className=" text-xl font-bold mb-3">Spiderman: Homecoming</h3>
            <div className="flex items-center justify-between text-sm opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full">
              Watch now
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
