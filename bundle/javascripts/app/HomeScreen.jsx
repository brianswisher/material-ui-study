import HomeScreenRuntime from "./HomeScreenRuntime";
import Location from "./component/Location";
import Radium from "radium";
import React from "react";
import { baseline } from "./config/index";

let styles = {
  container: {
    textAlign: "left"
  }
};

@Radium
class HomeScreen extends HomeScreenRuntime {
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
        <h1>Home</h1>
        <Location />
      </div>
    )
  }
}

export default HomeScreen;
