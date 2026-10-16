import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      multiple:1
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
      multiple: this.state.multiple*this.state.count+1
    });
  };

  render() {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <h3>multiple :{this.state.multiple}</h3>
        <button onClick={this.increment}>Increment</button>
        
      </div>
    );
  }
}

export default Counter;
