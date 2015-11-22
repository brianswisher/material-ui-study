import React from "react";
import ReactDom from "react-dom";
import ReactDOMServer from "react-dom/server";

let isServer = typeof window === "undefined";
let Route;
let routeFactory = {
  factory: React.createFactory,
  render: ReactDOMServer.renderToString
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

          ReactDom.render(<Route {...props} />, viewport);
        }, "home");
      }
      break;

    default:
      if (isServer) {
        routeFactory.module = "NotFoundScreen";

        return routeFactory;
      } else {
        return require.ensure([], function() {
          Route = require("./NotFoundScreen");

          ReactDom.render(<Route {...props} />, viewport);
        }, "not_found");
      }
  }
};
