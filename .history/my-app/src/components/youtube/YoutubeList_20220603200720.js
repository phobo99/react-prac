import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = () => {
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => {
        let newClass = "";
        if (index === 1) newClass = "abc";
        {
          /* const newClass = index === 1 ? "abc" : ""; */
        }
        return (
          <YoutubeItem
            key={item.id}
            image={item.image || item.avatar}
            avatar={item.avatar || item.image}
            title={item.title || "Learning React course"}
            author={item.author}
            className={newClass}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
