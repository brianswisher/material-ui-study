import HomeScreenRuntime from "./HomeScreenRuntime";
import mui from "material-ui";
import Radium from "radium";
import React from "react";
import { baseline } from "./config/index";

const Paper = mui.Paper;
const IconButton = mui.IconButton;
const FontIcon = mui.FontIcon;
const AppBar = mui.AppBar;

let styles = {
  container: {
    textAlign: "left"
  }
};

@Radium
class HomeScreen extends HomeScreenRuntime {
  constructor(props) {
    super(props);

    this.state = {
      runtime: false
    };
  }

  render() {
    var { runtime } = this.state;
    var menuButton = (
      <IconButton onClick={this.props.onMenuIconButtonTouch}>
        <FontIcon className="material-icons menu-icon icon-navigation-white icon-navigation-white-ic_menu_white_24dp">home</FontIcon>
      </IconButton>
    );

    return (
      <div style={styles.container}>
        <h1>Material UI Study</h1>
        {runtime ? (
          <Paper className="topNav" rounded={false}>
            <AppBar
              iconElementLeft={menuButton}
              title="Sample project"
              zDepth={0} />
          </Paper>
        ) : null}
      </div>
    )
  }
}

export default HomeScreen;
