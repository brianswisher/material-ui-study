'use strict';

let APP_DIR = "../../bundle/javascripts/app";

import express from "express";
import csrf from "csurf";
import diskdb from "diskdb";
import {parse} from "url";
import {createFactory, renderToString} from "react";

let DEEP_LINK = process.env.DEEP_LINK;
let ENV = process.env.ENV;
let PROXY = process.env.PROXY || true;

let csrfProtection = csrf({ cookie: true });
let router = express.Router();
let path;
let Screen;
let {API, LOCALES} = require("../../bundle/javascripts/app/config/index").CONSTANTS;

let getHost = (req) => {
  let host = req.headers.host.toString();

  if (ENV === 'development') {
    return host.substring(0, host.length - 1) + 1;
  }

  return host;
};

let config = (req) => {
  var {locale, locales} = req.i18n;
  var i18n = locales[locale];

  return {
    _: req.csrfToken(),
    encrypted: req.connection.encrypted || "undefined",
    ENV: ENV,
    host: getHost(req),
    path: parse(req.url).pathname
  };
};

if (PROXY) {
  require("./proxy")(router, csrfProtection);
}

let route = require("../../bundle/javascripts/app/routes");

router.get("*", csrfProtection, (req, res) => {
  const {headers} = req;

  global.navigator = {
    userAgent: headers["user-agent"] || ""
  };

  var {locales} = req.i18n;
  var props = config(req);
  var {factory, module, render} = route(props.path);
  var Route = factory( require(`${APP_DIR}/${module}`) );

  props.i18n = locales[req.i18n.getLocale()];

  res.send(require("./html")({
    assets: require("./assets.json"),
    i18n: props.i18n,
    locale: req.i18n.getLocale(),
    markup: render(new Route(props))
  }));
});

export default router;
