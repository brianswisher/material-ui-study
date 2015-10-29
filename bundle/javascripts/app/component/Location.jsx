import Radium from "radium";
import React from "react";
import LocationRuntime from "./LocationRuntime";

let styles = {
  list: {
    listStyleType: "none",
    padding: 0
  },
  item: {
    cursor: "pointer"
  }
};

@Radium
class Location extends LocationRuntime {
  render() {
    if (this.state.errorMessage) {
      return (
        <div>Something is wrong</div>
      );
    }

    if (!this.state.locations.length) {
      return (
        <div>loading...</div>
      )
    }

    return (
      <ul style={styles.list}>
        {this.state.locations.map((location, i) => {
          return (
            <li style={styles.item} key={i} onClick={this.onClick} data-path={location.path}>{location.name}</li>
          );
        })}
      </ul>
    );
  }
}

export default Location;
