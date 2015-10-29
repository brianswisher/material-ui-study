import React from "react";

let Link = Router.Link;

class NotFoundScreen extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <h1>404</h1>
      </div>
    )
  }
}

export default NotFoundScreen;
