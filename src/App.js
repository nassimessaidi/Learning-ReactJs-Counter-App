import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 10 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
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
    return ( <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c => c.value > 0 ).length}/>
      <main className="container">
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        />
      </main>
    </React.Fragment> );
  }
}
 
export default App;
