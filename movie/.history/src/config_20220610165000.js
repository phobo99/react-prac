export const fetcher = (...args) => fetch(...args).then((res) => res.json());
// https://api.themoviedb.org/3/movie/now_playing?api_key=8770f9570b6404aec4d862d9f76e3098
export const apiKey = "8770f9570b6404aec4d862d9f76e3098";
const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpointSearch}/${type}?api_key=${apiKey}`,
  getMovieDetails: (movieId) =>
    `${tmdbEndpointSearch}/${movieId}?api_key=${apiKey}`,
  getMovieCredits: (movieId) =>
    `${tmdbEndpointSearch}/${movieId}/credits?api_key=${apiKey}`,
  getMovieVideo: (movieId) =>
    `${tmdbEndpointSearch}/${movieId}/videos?api_key=${apiKey}`,
};
