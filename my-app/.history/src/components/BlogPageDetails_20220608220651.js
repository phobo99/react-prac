import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogPageDetails = () => {
  const { slug } = useParams();
  console.log(
    "🚀 ~ file: BlogPageDetails.js ~ line 6 ~ BlogPageDetails ~ slug",
    slug
  );
  const navigate = useNavigate();
  return (
    <div>
      Blog details
      <button
        onClick={() => navigate("/blog")}
        className="text-white bg-blue-500 rounded-sm -3"
      >
        Navigate to Blog page
      </button>
    </div>
  );
};

export default BlogPageDetails;
