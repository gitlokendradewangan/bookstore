const routes = {
  login: "/login",
  authorListing: "/author-listing",
  bookListing: "/book-listing",
};

const defaultRoutes = {
  admin: routes.authorListing,
  guest: routes.bookListing,
  login: routes.login,
};

export { routes, defaultRoutes };
