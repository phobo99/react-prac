import React from "react";
import useSWR from "swr";
import MovieCard from "../components/movies/MovieCard";
import { fetcher } from "../config";

const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=8770f9570b6404aec4d862d9f76e3098`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <div className="py-10 ">
      <div className="flex">
        <div className="flex-1">
          <input
            type="text"
            className="w-full"
            placeholder="Type here to search ..."
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
