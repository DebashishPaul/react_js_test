import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Paul from "./components/Paul";
import Welcome from "./components/WelcomeClass";
import Next3 from "./components/Next3";
import Counter from "./components/Counter";
import TenCounter from "./components/TenCounter";
import ClassHandler from "./components/ClassHandler";
import FunctionHandler from "./components/FunctionHandler";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Paul></Paul>
      <Welcome></Welcome> */}
        {/* <Next3></Next3> */}
        {/* <TenCounter /> */}
        <ClassHandler />
        <FunctionHandler />
      </div>
    );
  }
}

export default App;
