import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(
    "🚀 ~ file: BlogPage.js ~ line 6 ~ BlogPage ~ searchParams",
    searchParams
  );
  useEffect(() => {
    setSearchParams({ search: "pholuudang" });
  });
  return <div>Profile Page</div>;
};

export default BlogPage;
