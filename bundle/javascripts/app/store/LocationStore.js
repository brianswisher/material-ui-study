var alt = require("../alt.js");
var LocationAction = require("../action/LocationAction");

class LocationStore {
  constructor() {
    this.locations = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateLocations: LocationAction.UPDATE_LOCATIONS,
      handleFetchLocations: LocationAction.FETCH_LOCATIONS,
      handleLocationsFailed: LocationAction.LOCATIONS_FAILED
    });
  }

  handleUpdateLocations(locations) {
    this.locations = locations;
    this.errorMessage = null;
    // optionally return false to suppress the store change event
  }

  handleFetchLocations() {
    // reset the array while we're fetching new locations so React can
    // be smart and render a spinner for us since the data is empty.
    this.locations = [];
  }

  handleLocationsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

module.exports = alt.createStore(LocationStore, "LocationStore");
