import React from "react";

class FeedScreenRuntime extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({runtime: true});

    window.scrollTo(0, 0);
  }
}

export default FeedScreenRuntime;
