import FeedScreenRuntime from "./FeedScreenRuntime";
import Location from "./component/Location";
import Radium from "radium";
import React from "react";

let styles = {
  container: {
    textAlign: "left"
  }
};

@Radium
class FeedScreen extends FeedScreenRuntime {
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
        <h1>Feed</h1>
        <Location />
      </div>
    )
  }
}

export default FeedScreen;
