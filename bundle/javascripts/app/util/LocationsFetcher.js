var mockData = [
  { id: 0, name: "home", path: "/" },
  { id: 1, name: "feed", path: "/feed" },
  { id: 2, name: "profile", path: "/profile" },
  { id: 3, name: "a", path: "/a" },
  { id: 4, name: "b", path: "/b" },
  { id: 5, name: "c", path: "/c" }
];

var LocationsFetcher = {
  fetch: function () {
    // returning a Promise because that is what fetch does.
    return new Promise(function (resolve) {
      // simulate an asynchronous action where data is fetched on
      // a remote server somewhere.
      setTimeout(function () {

        // resolve with some mock data
        resolve(mockData);
      }, 250);
    });
  }
};

module.exports = LocationsFetcher;
