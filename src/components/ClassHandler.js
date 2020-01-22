import React, { Component } from "react";

class ClassHandler extends Component {
  myEvent() {
    console.log("click saved!!");
  }

  render() {
    return (
      <div>
        <button onClick={this.myEvent}>click me slowly</button>
      </div>
    );
  }
}

export default ClassHandler;
