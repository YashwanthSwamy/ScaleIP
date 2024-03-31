import express from "express";
import { signupController } from "../features/signup/controller/signupController";
import { signupMiddleware } from "../features/signup/middleware/signupMiddleware";

const signupRoutes = express.Router();

signupRoutes.post(
    "/api/v1/userinfo/signup",
    signupMiddleware.validate,
    signupController.signup
);

export { signupRoutes };