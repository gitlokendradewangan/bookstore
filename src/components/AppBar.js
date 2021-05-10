import React, { useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/PowerSettingsNew";
import { authContext } from "../AuthContext";

const useStyles = makeStyles({
  appBar: {
    alignItems: "flex-end",
    backgroundColor: "white",
  },
  div: {
    display: "flex",
    alignItems: "center",
  },
  container: {
    paddingTop: "75px",
    maxHeight: "calc( 100vh - 75px )",
  },
});

function MyAppBar({ children }) {
  const classes = useStyles();
  const auth = useContext(authContext);
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.div}>
            <Typography color="textSecondary">{auth.user?.username}</Typography>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={() => auth.signout()}
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

MyAppBar.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MyAppBar;
