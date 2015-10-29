import React from "react";
let Screen;

export default (path, dir) => {
  let isServer = typeof window === "undefined";
  let isClient = !isServer;
  let {ROUTE} = require("./config/index").CONSTANTS;
  let viewport;

  if (isClient) {
    viewport = document.getElementById("viewport");
  }

  switch (path) {
    case ROUTE.ROOT:
      if (isServer) {
        return `${dir}/HomeScreen`;
      } else {
        return require.ensure([], function() {
          Screen = require("./HomeScreen");

          React.render(<Screen />, viewport);
        }, "home");
      }

    case ROUTE.FEED:
      if (isServer) {
        return `${dir}/FeedScreen`;
      } else {
        return require.ensure([], function() {
          Screen = require("./FeedScreen");

          React.render(<Screen />, viewport);
        }, "feed");
      }

    case ROUTE.PROFILE:
      if (isServer) {
        return `${dir}/ProfileScreen`;
      } else {
        return require.ensure([], function() {
          Screen = require("./ProfileScreen");

          React.render(<Screen />, viewport);
        }, "profile");
      }

    default:
      if (isServer) {
        return `${dir}/NotFoundScreen`;
      } else {
        return require.ensure([], function() {
          Screen = require("./NotFoundScreen");

          React.render(<Screen />, viewport);
        }, "not_found");
      }
  }
};
