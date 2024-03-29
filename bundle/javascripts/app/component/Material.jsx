import mui from "material-ui";
import React from "react";

const Paper = mui.Paper;
const IconButton = mui.IconButton;
const FontIcon = mui.FontIcon;
const AppBar = mui.AppBar;

class Material extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      runtime: false
    };
  }

  componentDidMount() {
    this.setState({runtime: true});
  }

  render() {
    var { runtime } = this.state;
    var menuButton = (
      <IconButton onClick={this.props.onMenuIconButtonTouch}>
        <FontIcon className="material-icons">navigation</FontIcon>
      </IconButton>
    );

    if (!runtime) return null;

    return (
      <Paper className="topNav" rounded={false}>
        <AppBar
          iconElementLeft={menuButton}
          title="Sample project"
          zDepth={0} />
      </Paper>
    );
  }
}

export default Material;
