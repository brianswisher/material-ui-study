export default function(options) {
  var {
    assets,
    i18n,
    locale,
    markup,
    wpt
  } = options;

  return (function(){
      return `<!DOCTYPE html>
<html>
  <head lang="${locale}">
    <meta charSet="UTF-8"/>
    <meta content="width=device-width,initial-scale=1,user-scalable=yes,minimum-scale=1.0" name="viewport" />
    <title>${i18n.page_title}</title>
  </head>
  <body>
    <div id="viewport">${markup}</div>
  </body>
  <script>APP={locale:"${locale}",assets:${JSON.stringify(assets)},i18n:${JSON.stringify(i18n)}};</script>
  <script src="/${assets.common.js}"></script>
  <script src="/${assets.app.js}" async="async"></script>
</html>
`;
    })().split("\n").join("").replace(/^\s+|\s+$|\s+(?=\s)/g, "");
};
