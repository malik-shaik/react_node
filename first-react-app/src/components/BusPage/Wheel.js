import React, { Component } from "react";
class Wheel extends Component {
  render() {
    const { wheel } = this.props;

    return <div>{wheel}</div>;
  }
}

export default Wheel;
