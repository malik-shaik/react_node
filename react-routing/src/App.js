import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import Theme from "./theme/theme";

export default class App extends Component {
  state = { color: undefined };

  handleColor = color => this.setState({ color });

  render() {
    const { color } = this.state;
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link> <Link to="/about">About</Link>
          </nav>

          <Switch>
            <Route
              exact
              path="/"
              component={props => <HomePage {...props} />}
            />
            <Route
              exact
              path="/about"
              // component={props => <AboutPage {...props} />
              component={AboutPage}
            />
            <Route
              exact
              path="/theme"
              component={props => (
                <Theme handleColor={this.handleColor} {...props} />
              )}
            />
          </Switch>
        </div>
        {color && <h3>color in app: {color}</h3>}
      </Router>
    );
  }
}
