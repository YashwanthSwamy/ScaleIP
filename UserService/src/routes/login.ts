import express from "express";
import { loginController } from "../features/login/controller/loginController";
import { loginMiddleware } from "../features/login/middleware/loginMiddleware";

const loginRoutes = express.Router();

loginRoutes.post(
    "/api/v1/userinfo/login",
    loginMiddleware.validate,
    loginController.login
);

export { loginRoutes };