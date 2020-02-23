import React, { Component } from "react";
import "./button.css";

export default class ButtonWithChildren extends Component {
  render() {
    const { children } = this.props;
    return <button className="btn">{children || "click"}</button>;
  }
}
