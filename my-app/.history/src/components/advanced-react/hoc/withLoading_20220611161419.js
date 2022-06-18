import { useEffect, useState } from "react";

function withLoading(Component) {
  return (props) => {
    const [news, setNews] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(
          `https://hn.algolia.com/api/v1/search?query=react`
        );
        const data = await response.json();
      }
      fetchData();
    }, []);
    // if (!data || data.length === 0) return <div>Loading...</div>;
    return <Component {...props}></Component>;
  };
}
export default withLoading;
// High order function: map, filter, some, every, reduce
// [1,2,3].map((item, array) => {})
