import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="m-4">
        {this.props.children}
        <span className={this.renderBadge()}>{this.renderCounter()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
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

  renderCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  renderBadge() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
