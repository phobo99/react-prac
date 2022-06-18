import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = (page) => {
  return axios
    .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
// https://picsum.photos/v2/list
const Photos = () => {
  // useEffect(callback, [dependencies])
  // useEffect(function callback(){
  //   // side-effects
  // },[])
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nexPage, setNextPage] = useState(1);
  const handleLoadMorePhotos = () => {
    getRandomPhotos(nexPage).then((images) => {
      const newPhotos = [...randomPhotos, images];
      setRandomPhotos(newPhotos);
      setNextPage(nexPage + 1);
    });
  };
  useEffect(() => {
    handleLoadMorePhotos();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.map((item, index) => (
          <div
            key={item.id}
            className="p-3 bg-white shadow-md rounded-lg h-[200px]"
          >
            <img
              src={item.download_url}
              alt={item.author}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMorePhotos}
          className="inline-block px-8 py-4 bg-purple-600 text-white"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
