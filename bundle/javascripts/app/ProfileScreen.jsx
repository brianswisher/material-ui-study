import ProfileScreenRuntime from "./ProfileScreenRuntime";
import Location from "./component/Location";
import Radium from "radium";
import React from "react";

let styles = {
  container: {
    textAlign: "left"
  }
};

@Radium
class ProfileScreen extends ProfileScreenRuntime {
  constructor(props) {
    super(props);

    this.state = {
      runtime: false
    };
  }

  render() {
    var { runtime } = this.state;

    return (
      <div style={styles.container}>
        <h1>Profile</h1>
        <Location />
      </div>
    )
  }
}

export default ProfileScreen;
