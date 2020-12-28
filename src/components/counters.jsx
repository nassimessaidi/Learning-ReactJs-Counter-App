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

  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    // Copy all array in new array except the target element we want to delete
    // then replace the state with the new array witout the deleted element
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // we can write the syntax below as this.setState({ counters }); because it's the same
    this.setState({ counters: counters });
  };

  render() {
    return (
      <div className="container text-center mt-4">
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          >
            <h3 className="mx-2">Counter #{counter.id}</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
