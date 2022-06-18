import React from "react";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path } = item;
  return (
    <div>
      <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
        <img
          src={``}
          alt=""
          className="w-full h-[250px] object-cover rounded-lg mb-5"
        />
        <h3 className=" text-xl font-bold mb-3">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full">
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
