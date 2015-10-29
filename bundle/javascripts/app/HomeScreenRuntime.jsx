import { baseline, percent } from "./config/index";
import React from "react";

class HomeScreenRuntime extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({runtime: true});

    window.scrollTo(0, 0);
  }
}

export default HomeScreenRuntime;
