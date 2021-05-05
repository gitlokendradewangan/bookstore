import { authContext } from "../AuthContext";
import { connect } from "react-redux";
import { login } from "../stateManagement/action";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import AppBar from "../components/AppBar";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "red",
  },
  grid: {
    background: "yellow",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function BookListing(props) {
  const classes = useStyles();

  return (
    <AppBar>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          {Array.from("1234567890").map((e) => (
            <Grid item sm={4} md={4} xs={2} lg={3}>
              <Paper className={classes.paper}>
                <div>
                  <img
                    src={"https://source.unsplash.com/random"}
                    height={150}
                    style={{ width: "" }}
                  />
                  <Typography>My book</Typography>
                </div>
                <div>
                  <div></div>
                  <div></div>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </AppBar>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
  };
};

const mapStateToProps = (state) => {
  return { loginData: state.data.login };
};

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore(BookListing);
