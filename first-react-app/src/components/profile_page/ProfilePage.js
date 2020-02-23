import React, { Component } from "react";
import Profile from "./Profile";

class PrifilePage extends Component {
  render() {
    const samProfile = { name: "Sam", hobby: "music" };
    const RoyProfile = { name: "Roy", hobby: "dance" };
    const VangProfile = { name: "Vang", hobby: "cooking" };
    const profiles = [samProfile, RoyProfile, VangProfile];
    return (
      <div>
        <h1>Profile Page</h1>
        {profiles.map((profile, index) => {
          return <Profile key={"profile" + index} profileInfo={profile} />;
        })}
      </div>
    );
  }
}

export default PrifilePage;
