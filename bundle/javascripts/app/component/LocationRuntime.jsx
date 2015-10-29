import React from "react";
import LocationStore from "../store/LocationStore";
import LocationAction from "../action/LocationAction";

class LocationRuntime extends React.Component {
  constructor(props) {
    super(props);

    this.state = LocationStore.getState();

    this.onChange = onChange.bind(this);
    this.onClick = onClick.bind(this);
  }

  componentDidMount() {
    LocationStore.listen(this.onChange);

    LocationAction.fetchLocations();
  }

  componentWillUnmount() {
    LocationStore.unlisten(this.onChange);
  }
}

function onChange(state) {
  this.setState(state);
}

function onClick(e) {
  var path = e.target.getAttribute("data-path");

  if (path !== window.location.pathname) {
    APP.navigate(path);
  }
}

export default LocationRuntime;
