import React, { useEffect } from "react";
import axios from "axios";

const getRandomPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      console.log(response);
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
  console.log("outside");
  useEffect(() => {
    // side-effects
    // document.title = "Welcome to useEffect";
    // console.log("inside");
    getRandomPhotos();
  }, []);
  return <div>Photo</div>;
};

export default Photos;
