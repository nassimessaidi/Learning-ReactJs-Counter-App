import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  /* if you don't want to use this, then, use the arrow function
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  */

  handleIncrement = (productParams) => {
    console.log(productParams);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.renderBadge()}>{this.renderCounter()}</span>
        <button
          onClick={() => this.handleIncrement(15)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0)
      return <p className="m-2">There are no tags!</p>;
    return (
      <ul className="m-2">
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  renderCounter() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  renderBadge() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
