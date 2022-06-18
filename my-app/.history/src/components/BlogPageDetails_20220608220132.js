import React from "react";
import { useParams } from "react-router-dom";

const BlogPageDetails = () => {
  const { slug } = useParams();
  //fetching.com?slug=hello-world
  return <div>Blog details</div>;
};

export default BlogPageDetails;
