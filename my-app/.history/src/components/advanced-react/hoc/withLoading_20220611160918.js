import { useState } from "react";

function withLoading(Component) {
  return (props) => {
    const [data, setData] = useState([]);
    if (!data || data.length === 0) return <div>Loading...</div>;
    return <Component data={data} {...props}></Component>;
  };
}
export default withLoading;
// High order function: map, filter, some, every, reduce
// [1,2,3].map((item, array) => {})
