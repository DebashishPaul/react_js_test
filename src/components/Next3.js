import React from "react";

const Next3 = () => {
  //   return (
  //     <div>
  //       <h1>hello JSX</h1>
  //     </div>

  return React.createElement(
    "div",
    { id: "paul" },
    React.createElement("h1", null, "hello paul")
  );
};

export default Next3;
