import React from "react";

let {createFactory, renderToString} = React;
let isServer = typeof window === "undefined";
let Route;
let routeFactory = {
  factory: createFactory,
  render: renderToString
};
let viewport = isServer ? null : document.getElementById("viewport");

export default (path, props = {}) => {
  let {ROUTE} = require("./config/index").CONSTANTS;

  switch (path) {
    case ROUTE.ROOT:
      if (isServer) {
        routeFactory.module = "HomeScreen";

        return routeFactory;
      } else {
        return require.ensure([], function() {
          Route = require("./HomeScreen");

          React.render(<Route {...props} />, viewport);
        }, "home");
      }
      break;

    case ROUTE.FEED:
      if (isServer) {
        routeFactory.module = "FeedScreen";

        return routeFactory;
      } else {
        return require.ensure([], function() {
          Route = require("./FeedScreen");

          React.render(<Route {...props} />, viewport);
        }, "feed");
      }
      break;

    case ROUTE.PROFILE:
      if (isServer) {
        routeFactory.module = "ProfileScreen";

        return routeFactory;
      } else {
        return require.ensure([], function() {
          Route = require("./ProfileScreen");

          React.render(<Route {...props} />, viewport);
        }, "profile");
      }
      break;

    default:
      if (isServer) {
        routeFactory.module = "NotFoundScreen";

        return routeFactory;
      } else {
        return require.ensure([], function() {
          Route = require("./NotFoundScreen");

          React.render(<Route {...props} />, viewport);
        }, "not_found");
      }
  }
};
