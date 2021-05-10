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
    overflowX: "hidden",
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

function Header({ children, headerName, searchInputs }) {
  const classes = useStyles();
  const auth = useContext(authContext);
  return (
    <div className={classes.grow}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={5} className={classes.headerRow}>
          {searchInputs.length > 0 && (
            <Paper component="nav" className={classes.root}>
              {searchInputs.map((ele, index) => (
                <>
                  <InputBase
                    key={index}
                    className={classes.input}
                    placeholder={ele.placeholder}
                    // "Search for Authors"
                    value={ele.value}
                    inputProps={{ "aria-label": ele.placeholder }}
                    onChange={ele.onChange}
                  />
                  {searchInputs[index + 1] && (
                    <Divider
                      className={classes.divider}
                      orientation="vertical"
                    />
                  )}
                </>
              ))}
              {/* <InputBase
                className={classes.input}
                placeholder="Search for Books"
                inputProps={{ "aria-label": "Search for Books" }}
              /> */}
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          )}
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
  searchInputs: [],
};

Header.propTypes = {
  children: PropTypes.element.isRequired,
  headerName: PropTypes.string.isRequired,
  searchInputs: PropTypes.array.isRequired,
};

export default Header;
