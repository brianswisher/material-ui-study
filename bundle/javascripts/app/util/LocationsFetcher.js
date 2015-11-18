import request from "superagent";

var LocationsFetcher = {
  fetch: function () {
    return new Promise(function (resolve) {
      request
        .get("/api/locations")
        .end(function(error, response) {
          resolve(response.body);
        });
    });
  }
};

module.exports = LocationsFetcher;
