var ENV = process.env.ENV;
var DEFAULT_PORT = 3000;
var OPEN = process.env.OPEN || false;

(function() {
  'use strict';

  var CONSTANTS = require("../bundle/javascripts/app/config/index").CONSTANTS;
  var express = require('express');
  var browserSync = require('browser-sync');
  var path = require('path');
  var logger = require('morgan');
  var expressSession = require('express-session');
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var routes = require('./routes/index');
  var i18n = require('i18n-2');
  var app = express();
  var secret = 'somesecrettokenhere';
  var sessionData = {
    resave: true,
    saveUninitialized: true,
    secret: secret
  };

  app.use(logger('dev'));

  app.use(cookieParser(secret));

  i18n.expressBind(app, {
    session: false,
    locales: CONSTANTS.LOCALES.LANGUAGES,
    base: function(locale) {
      const baseLocale = locale.slice(0,2);

      if (baseLocale == locale) {
        return CONSTANTS.LOCALES.DEFAULT;
      } else {
        return baseLocale;
      }
    }
  });

  app.use(function(req, res, next) {
    req.i18n.defaultLocale = CONSTANTS.LOCALES.DEFAULT;

    next();
  });

  app.use(expressSession(sessionData));

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(express.static(path.join(__dirname, '../public'), { maxAge: 86400000 }));

  app.use('/', routes);

  app.set('port', process.env.PORT || DEFAULT_PORT);

  var server = app.listen(app.get('port'), function() {
    if (ENV === 'development') {
      var port = server.address().port;

      browserSync({
        open: OPEN,
        port: port,
        proxy: 'localhost:' + port,
        files: ['public/**/*.{js,css,html}']
      });
    } else {
      console.log(
        'Express server listening on port ' + server.address().port
      );
    }
  });

  module.exports = app;
}());
