import React, { Component } from "react";
import "./button.css";

export default class ButtonWithProps extends Component {
  render() {
    const { buttonText, customStyle, buttonClicked } = this.props;
    return (
      <button className="btn" style={customStyle} onClick={buttonClicked}>
        {buttonText ? buttonText : "click"}
      </button>
    );
  }
}
