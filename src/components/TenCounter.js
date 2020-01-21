import React, { Component } from "react";

class TenCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }
  newSet() {
    this.setState({
      count: this.state.count * 0
    });
  }
  render() {
    return (
      <div>
        <div>Count*= {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.newSet()}>reset</button>
      </div>
    );
  }
}

export default TenCounter;
