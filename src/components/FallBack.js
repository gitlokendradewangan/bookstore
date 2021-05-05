import CircularProgress from "@material-ui/core/CircularProgress";

const fallBackComponent = (
  <div
    style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CircularProgress />
  </div>
);

export default fallBackComponent;
