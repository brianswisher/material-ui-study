import route from "./routes";

APP.navigate = (path, quietly, replace) => {
  route(path);

  if (!quietly) {
    history.pushState({ path: path }, null, path);
  }

  if (replace) {
    history.replaceState({ path: path }, null, path);
  }
}

window.onload = () => {
  APP.navigate(window.location.pathname, true, true);
}

window.addEventListener("popstate", (e) => {
  if (e.state) {
    APP.navigate(e.state.path, true);
  }
});
