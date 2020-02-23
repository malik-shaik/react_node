import React, { Component } from "react";
import Wheel from "./Wheel";
class BusPage extends Component {
  render() {
    const wheels = ["wheel1", "wheel2", "wheel3", "wheel4"];
    return (
      <div>
        <h2>bus page</h2>
        {wheels.map((wheel, index) => {
          return <Wheel key={index} wheels={wheels} />;
        })}
      </div>
    );
  }
}

export default BusPage;
