import React from "react";

class ProfileScreenRuntime extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({runtime: true});

    window.scrollTo(0, 0);
  }
}

export default ProfileScreenRuntime;
