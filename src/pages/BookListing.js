import PropTypes from "prop-types";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

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
    padding: 10,
  },
  price: {
    color: "green",
    fontWeight: "bold",
  },
}));

function BookListing(props) {
  const classes = useStyles();

  const data = (
    <Grid container spacing={3}>
      {props.booksData.map((e, index) => (
        <Grid key={index} item sm={4} md={4} xs={2} lg={3}>
          <Paper className={classes.paper}>
            <div className={classes.item}>
              <img src={e.img} height={150} />
              <Typography>{e.name}</Typography>
            </div>
            <div className={classes.detail}>
              <Typography>{e.publish_year}</Typography>
              <Typography
                className={classes.price}
              >{`RS. ${e.price}`}</Typography>
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

  const noDataUI = <Typography>{props.booksData}</Typography>;

  return (
    <AppBar>
      <Header headerName={"Books"}>
        <Container maxWidth="md">{props.noDataMsg ? noDataUI : data}</Container>
      </Header>
    </AppBar>
  );
}

BookListing.propTypes = {
  booksData: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    booksData: state.data.books,
    noDataMsg: state.data.books ? null : "No Book Available In The Store.",
  };
};

const connectToStore = connect(mapStateToProps);

export default connectToStore(BookListing);
