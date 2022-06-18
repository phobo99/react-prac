export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "8770f9570b6404aec4d862d9f76e3098";
const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpointSearch}/${type}?api_key=${apiKey}`,
};
