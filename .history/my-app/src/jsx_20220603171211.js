import React from "react";

const Jsx = () => {
  const element = <div id="root">Hello world</div>;
  const elementR = React.createElement("div", { id: "root" }, "Hello world");
  const element2 = (
    <div>
      <span>Hello</span> <span>World</span>
    </div>
  );
  return <div></div>;
};

export default Jsx;
