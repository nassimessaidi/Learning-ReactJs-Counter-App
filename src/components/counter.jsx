import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
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
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div className="m-4">
        {this.props.children}
        <span className={this.renderBadge()}>{this.renderCounter()}</span>
        <button
          onClick={() => this.handleIncrement(15)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm mx-2"
        >
          Delete
        </button>
      </div>
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
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  renderBadge() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
