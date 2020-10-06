import express from "express";
import path from "path";
import mainRouter from "./routers/mainRouter";
import userRouter from "./routers/userRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(localsMiddleware);

app.use(routes.home, mainRouter);
app.use(routes.users, userRouter);

export default app;
