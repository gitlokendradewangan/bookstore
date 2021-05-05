import { Component } from "react";
import { authContext } from "../AuthContext";
import { connect } from "react-redux";
import { login } from "../stateManagement/action";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    height: "100vh",
    padding: 100,
    background: "red",
  },
  grid: {
    background: "yellow",
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
        <Grid item xs={12} className={classes.grid}>
          <input
            value={username}
            onChange={(e) => this.handleInput(e.target.value, "username")}
          />
          <input
            value={password}
            onChange={(e) => this.handleInput(e.target.value, "password")}
          />
          <input type="button" value="login" onClick={this.handleLogin} />
        </Grid>
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
