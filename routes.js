const HOME = "/",
  BAND = "/band",
  INFO = "/info",
  TOUR = "/tour",
  ALBUM = "/album",
  SHOP = "/shop",
  JOIN = "/join",
  LOGIN = "/login",
  LOGOUT = "/logout",
  USERS = "/users",
  USER_DETAIL = "/:id";

const routes = {
  home: HOME,
  band: BAND,
  info: INFO,
  tour: TOUR,
  album: ALBUM,
  shop: SHOP,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  users: USERS,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
};

export default routes;
