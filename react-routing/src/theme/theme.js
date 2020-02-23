import React, { Component } from "react";

export default class Theme extends Component {
  state = { color: undefined };

  render() {
    const { handleColor } = this.props;
    return (
      <div>
        <input
          type="color"
          onChange={evt => {
            const { value } = evt.target;
            this.setState({ color: value });
            console.log("color changed theme component...:", value);
          }}
        />
        <button onClick={() => handleColor(this.state.color)}>
          show theme color
        </button>
      </div>
    );
  }
}
