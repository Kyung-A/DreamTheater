import express from "express";
import routes from "../routes";
import { users, userDetail } from "../controllers/controller";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
