import { NextFunction, Request, Response } from "express";
import HttpStatus from "http-status-codes";

import { CompanyDetailsModel } from "../model/companyDetailsModel";
import { CompanyDetailsValidator } from "../validators/companyDetailsValidator";

class CompanyDetailsMiddleware {
    public validate(request: Request, response: Response, next: NextFunction) {
        console.log("email", request.body);
        const input: CompanyDetailsModel = {
            companyId: request.body.companyId,
        };

        try {
            new CompanyDetailsValidator(input)
                .validateCompanyId()

        } catch (err) {
            console.log(err);
            response.status(HttpStatus.BAD_REQUEST);
            response.send(err);
            return;
        }

        next();
    }
}

const companyDetailsMiddleware = new CompanyDetailsMiddleware();
export { companyDetailsMiddleware };