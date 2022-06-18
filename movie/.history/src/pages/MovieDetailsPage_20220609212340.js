import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  return <div>MovieDetailsPage</div>;
};

export default MovieDetailsPage;
