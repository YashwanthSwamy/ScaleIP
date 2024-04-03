import express from "express";
import { companiesMiddleware } from "../features/companies/middleware/companiesMiddleware";
import { companyDetailsMiddleware } from "../features/companies/middleware/companyDetailsMiddleware";
import  { companiesController } from "../features/companies/controller/companiesController";

const companiesRoutes = express.Router();

companiesRoutes.get(
    "/api/v1/userinfo/companieslist",
    companiesMiddleware.validate,
    companiesController.getCompanyList
);

companiesRoutes.get(
    "/api/v1/userinfo/company",
    companyDetailsMiddleware.validate,
    companiesController.getCompanyDetails
);

export { companiesRoutes };