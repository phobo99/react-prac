import React, { useEffect, useState } from "react";
import useSWR from "swr";
import MovieCard from "../components/movies/MovieCard";
import { fetcher } from "../config";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
//https://api.themoviedb.org/3/search/movie?api_key=

const itemsPerPage = 20;
const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=8770f9570b6404aec4d862d9f76e3098&page=${nextPage}`
  );
  const filterDebounce = useDebounce(filter, 500);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=8770f9570b6404aec4d862d9f76e3098&query=${filterDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=8770f9570b6404aec4d862d9f76e3098&page=${nextPage}`
      );
    }
  }, [filterDebounce, nextPage]);
  const movies = data?.results || [];
  // const { page, total_pages } = data;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (!data || !data.total_pages) return;
    setPageCount(Math.ceil(data.total_pages / itemsPerPage));
  }, [data, itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_pages;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 text-white rounded-lg outline-none bg-slate-800"
            placeholder="Type here to search ..."
            onChange={handleFilterChange}
          />
        </div>
        <button className="p-4 text-white rounded-lg bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      {loading && (
        <div className="w-10 h-10 mx-auto border-4 border-t-4 rounded-full border-primary border-t-transparent animate-spin"></div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default MoviePage;
