import React, { Component } from "react";

export default class AboutPage extends Component {
  handleRedirect = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h3>About page</h3>
        <button onClick={this.handleRedirect}>Redirect to Home</button>
      </div>
    );
  }
}
