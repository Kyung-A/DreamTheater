import routes from "../routes";

export const home = (req, res) => {
  res.render("home");
};

export const band = (req, res) => {
  res.render("band");
};

export const info = (req, res) => {
  res.render("info");
};

export const tour = (req, res) => {
  res.render("tour");
};

export const album = (req, res) => {
  res.render("album");
};

export const shop = (req, res) => {
  res.render("join");
};

export const join = (req, res) => {
  res.render("join");
};

export const login = (req, res) => {
  res.render("login");
};

export const logout = (req, res) => {
  res.render("logout");
};

export const users = (req, res) => {
  res.render("users");
};

export const userDetail = (req, res) => {
  res.render("userDetail");
};
