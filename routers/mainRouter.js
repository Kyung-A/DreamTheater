import express from "express";
import routes from "../routes";
import {
  home,
  band,
  info,
  tour,
  album,
  shop,
  join,
  login,
  logout,
} from "../controllers/controller";

const mainRouter = express.Router();

mainRouter.get(routes.home, home);
mainRouter.get(routes.band, band);
mainRouter.get(routes.info, info);
mainRouter.get(routes.tour, tour);
mainRouter.get(routes.album, album);
mainRouter.get(routes.shop, shop);
mainRouter.get(routes.join, join);
mainRouter.get(routes.login, login);
mainRouter.get(routes.logout, logout);

export default mainRouter;
