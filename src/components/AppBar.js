import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/PowerSettingsNew";

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    alignItems: "flex-end",
    backgroundColor: "white",
  },
  div: {
    display: "flex",
    alignItems: "center",
  },
  container: {
    paddingTop: "64px",
    maxHeight: "calc( 100vh - 64px )",
  },
});

function MyAppBar({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.div}>
            <Typography color="textSecondary">{"Guest name"}</Typography>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="textPrimary"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>{children}</div>
    </div>
  );
}

export default MyAppBar;
