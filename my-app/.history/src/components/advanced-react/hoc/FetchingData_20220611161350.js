import React from "react";
import withLoading from "./withLoading";

const FetchingData = ({ data }) => {
  return (
    <div>
      {/* {data.map((item) => (
        <div key={item}>{item}</div>
      ))} */}
    </div>
  );
};

export default withLoading(FetchingData);
