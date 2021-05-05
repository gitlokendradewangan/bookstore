import { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { login } from "../stateManagement/action";
import { authContext } from "../AuthContext";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const styles = {
  root: {
    height: "100vh",
    padding: 100,
    backgroundImage: "linear-gradient(#f3f3f4 50%, #e7e8e9 50%)",
    alignContent: "center",
  },
  grid: {
    background: "white",
    height: "calc( 100vh - 50vh)",
    paddingLeft: 140,
    paddingRight: 140,
  },
  header: {
    fontSize: "x-large",
    padding: "15px",
    textAlign: "center",
  },
  center: { textAlign: "center" },
  moreOption: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  formButton: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
};

class Login extends Component {
  state = { username: "", password: "" };

  handleInput = (value, inputType) => {
    if (inputType === "username") {
    }
    this.setState({ [inputType]: value });
  };

  handleLogin = () => {
    const { loginData } = this.props;
    const isUserExist = this.checkUserAndPassword(loginData);
    if (isUserExist) {
      this.context.signin(isUserExist);
    } else {
      alert("Username or password is incorrect!");
    }
  };

  checkUserAndPassword = (data) => {
    const { username, password } = this.state;
    return data.find(
      (val) => val.username === username && val.password === password
    );
  };

  render() {
    const { username, password } = this.state;
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <CssBaseline />
        <Container maxWidth="sm" className={classes.grid}>
          <Grid item xs={12}>
            <Typography className={classes.header}>Login</Typography>
          </Grid>
          <Grid item xs={12} className={classes.center}>
            <TextField
              label="Username"
              value={username}
              fullWidth={true}
              margin="dense"
              variant="outlined"
              onChange={(e) => this.handleInput(e.target.value, "username")}
            />
          </Grid>
          <Grid item xs={12} className={classes.center}>
            <TextField
              label="Password"
              value={password}
              fullWidth={true}
              margin="dense"
              variant="outlined"
              type={"password"}
              onChange={(e) => this.handleInput(e.target.value, "password")}
            />
          </Grid>
          <Grid item xs={12} className={classes.moreOption}>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
            </FormGroup>
            <Link href="#">Forgot password?</Link>
          </Grid>
          <Grid item xs={12} className={classes.formButton}>
            <Button variant="outlined">Reset</Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleLogin}
            >
              Login
            </Button>
          </Grid>
        </Container>
      </Grid>
    );
  }
}

Login.contextType = authContext;

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
  };
};

const mapStateToProps = (state) => {
  return { loginData: state.data.login };
};

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withMystyle = withStyles(styles);

export default connectToStore(withMystyle(Login));
