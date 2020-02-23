import React, { Component } from "react";
class Profile extends Component {
  render() {
    //Destructuring assignment
    const { name, hobby } = this.props.profileInfo; //instead of this.props.name

    // console.log(this.props);
    return (
      <div>
        <h2>Profile component</h2>
        <p>Hello {name}</p>
        <p>My hobby is {hobby}</p>
      </div>
    );
  }
}

export default Profile;
