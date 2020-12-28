import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 10 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div className="container text-center mt-4">
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value}>
            <h3 className="mx-2">Counter #{counter.id}</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
