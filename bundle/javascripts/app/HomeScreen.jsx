import HomeScreenRuntime from "./HomeScreenRuntime";
import Material from "./component/Material";
import Radium from "radium";
import React from "react";

let styles = {
  container: {
    textAlign: "left"
  }
};

@Radium
class HomeScreen extends HomeScreenRuntime {
  render() {
    return (
      <div style={styles.container}>
        <h1>Material UI Study</h1>
        <Material />
      </div>
    )
  }
}

export default HomeScreen;
