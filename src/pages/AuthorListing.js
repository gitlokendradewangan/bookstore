import PropTypes from "prop-types";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import AppBar from "../components/AppBar";
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "red",
  },
  grid: {
    background: "yellow",
  },
  paper: {
    padding: 0,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  detail: {
    backgroundColor: "#f3f3f4",
    padding: 10,
  },
  item: {
    marginTop: theme.spacing(-7),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  placeholder: {
    borderRadius: "4px",
    height: theme.spacing(7),
    background: "#53a99e",
    position: "relative",
  },
  price: {
    color: "green",
    fontWeight: "bold",
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    borderStyle: "solid",
    borderColor: "#86ad84",
  },
  about: {
    overflow: "hidden",
    paddingTop: theme.spacing(2),
    fontSize: "small",
    display: "-webkit-box",
    WebkitLineClamp: "3",
    WebkitBoxOrient: "vertical",
  },
  text: { color: "black" },
}));

function AuthorListing(props) {
  const classes = useStyles();

  const data = (
    <Grid container spacing={3}>
      {props.authorsData.map((ele, index) => (
        <Grid key={index} item sm={6} md={4} xs={3} lg={4}>
          <Paper className={classes.paper}>
            <div className={classes.placeholder}></div>
            <div className={classes.item}>
              <Avatar
                alt="Remy Sharp"
                src={`https://source.unsplash.com/5${index}x5${index}/?human,face`}
                className={classes.avatar}
              />
              <Typography className={classes.text}>
                {ele.author_name}
              </Typography>
              <Typography className={classes.about}>{ele.about}</Typography>
            </div>
            <div className={classes.detail}>
              <Typography>{ele.publish_year}</Typography>
              <Typography
                className={classes.price}
              >{`RS. ${ele.price}`}</Typography>
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

  const noDataUI = <Typography>{props.booksData}</Typography>;
  const searchInputs = [
    {
      placeholder: "Search Authors",
      value: "",
      onChange: "",
    },
  ];
  return (
    <AppBar>
      <Header headerName={"Authors"} searchInputs={searchInputs}>
        <Container maxWidth="md">{props.noDataMsg ? noDataUI : data}</Container>
      </Header>
    </AppBar>
  );
}

AuthorListing.propTypes = {
  booksData: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authorsData: state.data.author,
    noDataMsg: state.data.author ? null : "No Author Available.",
  };
};

const connectToStore = connect(mapStateToProps);

export default connectToStore(AuthorListing);
