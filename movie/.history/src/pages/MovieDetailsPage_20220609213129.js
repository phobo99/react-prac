import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movies/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  console.log(data);
  return <div>MovieDetailsPage</div>;
};

export default MovieDetailsPage;
