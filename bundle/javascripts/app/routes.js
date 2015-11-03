import React from "react";

let {createFactory, renderToString} = React;
let isServer = typeof window === "undefined";
let Route;
let viewport = isServer ? null : document.getElementById("viewport");

export default (path, props = {}) => {
  let {ROUTE} = require("./config/index").CONSTANTS;

  switch (path) {
    case ROUTE.ROOT:
      if (isServer) {
        Route = createFactory( require("./HomeScreen") );

        return renderToString(new Route(props));
      } else {
        return require.ensure([], function() {
          Route = require("./HomeScreen");

          React.render(<Route {...props} />, viewport);
        }, "home");
      }
      break;

    case ROUTE.FEED:
      if (isServer) {
        Route = createFactory( require("./FeedScreen") );

        return renderToString(new Route(props));
      } else {
        return require.ensure([], function() {
          Route = require("./FeedScreen");

          React.render(<Route {...props} />, viewport);
        }, "feed");
      }
      break;

    case ROUTE.PROFILE:
      if (isServer) {
        Route = createFactory( require("./ProfileScreen") );

        return React.render(<Route {...props} />, viewport);
      } else {
        return require.ensure([], function() {
          Route = require("./ProfileScreen");

          React.render(<Route {...props} />, viewport);
        }, "profile");
      }
      break;

    default:
      if (isServer) {
        Route = createFactory( require("./NotFoundScreen") );

        return React.render(<Route {...props} />, viewport);
      } else {
        return require.ensure([], function() {
          Route = require("./NotFoundScreen");

          React.render(<Route {...props} />, viewport);
        }, "not_found");
      }
  }
};
