import React, { useContext, Suspense } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { routes, defaultRoutes } from "./Routes";
import { authContext } from "./AuthContext";
import fallBackComponent from "./components/FallBack";
import "./App.css";

// pages
const Login = React.lazy(() => import("./pages/Login"));
const BookListing = React.lazy(() => import("./pages/BookListing"));
// const AppBar = React.lazy(() => import("./components/AppBar"));

function GuestRoutes() {
  return (
    <>
      <Route path={routes.bookListing} exact={true} component={BookListing} />
    </>
  );
}

function AdminRoutes() {
  return (
    <>
      <Route
        path={routes.authorListing}
        exact={true}
        component={() => <h1>author-listing-page</h1>}
      />
    </>
  );
}

function LoginRoutes() {
  return (
    <>
      <Route path={routes.login} exact={true} component={Login} />
    </>
  );
}

function App(props) {
  const auth = useContext(authContext);
  const AppRoute = auth.user
    ? auth.user.isAdmin
      ? AdminRoutes
      : GuestRoutes
    : LoginRoutes;

  const redirectToPath = auth.user
    ? auth.user.isAdmin
      ? defaultRoutes.admin
      : defaultRoutes.guest
    : defaultRoutes.login;

  return (
    <Suspense fallback={fallBackComponent}>
      <Router>
        <AppRoute />
        <Redirect
          to={{
            pathname: redirectToPath,
          }}
        />
      </Router>
    </Suspense>
  );
}

export default App;
