import React, { useEffect } from "react";

// https://picsum.photos/v2/list
const Photos = () => {
  // useEffect(callback, [dependencies])
  // useEffect(function callback(){
  //   // side-effects
  // },[])
  console.log("outside");
  useEffect(() => {
    // side-effects
    document.title = "Welcome to useEffect";
    console.log("inside");
  }, []);
  return <div>Photo</div>;
};

export default Photos;
