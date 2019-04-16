import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  };
  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값:{this.state.number}</div>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}

export default Counter;
