import React from "react";

function FunctionHandler() {
  function myFcomponent() {
    console.log("saved successfully!!!");
  }
  return (
    <div>
      <button onClick={myFcomponent}>i am functioal component</button>
    </div>
  );
}

export default FunctionHandler;
