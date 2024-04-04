import express from "express";
import { investmentsController } from "../features/investments/controller/investmentsController";
import { fetchInvestmentsMiddleware } from "../features/investments/middleware/fetchInvestmentsMiddleware";
import { addInvestmentsMiddleware } from "../features/investments/middleware/addInvestmentsMiddleware";

const investmentsRoutes = express.Router();

investmentsRoutes.put(
    "/api/v1/userinfo/investments",
    addInvestmentsMiddleware.validate,
    investmentsController.add
);

investmentsRoutes.get(
    "/api/v1/userinfo/investments",
    fetchInvestmentsMiddleware.validate,
    investmentsController.fetch
);

export { investmentsRoutes };