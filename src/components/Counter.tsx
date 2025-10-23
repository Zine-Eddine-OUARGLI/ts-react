import React, { Component } from "react";

// Step 1: Define the state type interface
interface CounterState {
  count: number; // the current counter value
}

// Step 2: Define the component as a class extending React.Component
// Since this component has no props, we can use {} or undefined for props type.
class Counter extends Component<{}, CounterState> {
  // Step 3: Initialize state with a default value
  state: CounterState = {
    count: 0,
  };

  // Step 4: Define an increment method with proper typing
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="text-center mt-6">
        <p className="text-xl font-medium mb-2">Count: {this.state.count}</p>
        <button
          onClick={this.increment}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
