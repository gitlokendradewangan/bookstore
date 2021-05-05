import React, { useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { authContext } from "../AuthContext";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
  container: {
    justifyContent: "center",
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    textAlignLast: "center",
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  headerDivider: {
    marginTop: 10,
  },
  pageHeader: {
    padding: 10,
  },
});

function Header({ children, headerName }) {
  const classes = useStyles();
  const auth = useContext(authContext);
  return (
    <div className={classes.grow}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={5} className={classes.headerRow}>
          <Paper component="nav" className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Search for Authors"
              inputProps={{ "aria-label": "Search for Authors" }}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <InputBase
              className={classes.input}
              placeholder="Search for Books"
              inputProps={{ "aria-label": "Search for Books" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      <Container maxWidth="md">
        <Divider className={classes.headerDivider} />
        <Typography className={classes.pageHeader}>{headerName}</Typography>
        {children}
      </Container>
    </div>
  );
}

Header.defaultProps = {
  headerName: null,
};

Header.propTypes = {
  children: PropTypes.element.isRequired,
  headerName: PropTypes.string,
};

export default Header;
