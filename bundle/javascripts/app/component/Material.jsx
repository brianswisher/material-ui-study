import mui from "material-ui";
import React from "react";

const Paper = mui.Paper;
const IconButton = mui.IconButton;
const FontIcon = mui.FontIcon;
const AppBar = mui.AppBar;

class Material extends React.Component {
  render() {
    var menuButton = (
      <IconButton onClick={this.props.onMenuIconButtonTouch}>
        <FontIcon className="material-icons menu-icon icon-navigation-white icon-navigation-white-ic_menu_white_24dp">home</FontIcon>
      </IconButton>
    );
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
