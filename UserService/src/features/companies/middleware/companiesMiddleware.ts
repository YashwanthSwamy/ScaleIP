import { NextFunction, Request, Response } from "express";
import HttpStatus from "http-status-codes";

import { CompaniesModel } from "../model/companiesModel";
import { CompaniesValidator } from "../validators/companiesValidator";

class CompaniesMiddleware {
    public validate(request: Request, response: Response, next: NextFunction) {
        console.log("email", request.body);
        const input: CompaniesModel = {
            email: request.body.email,
        };

        try {
            new CompaniesValidator(input)
                .validateUserId()

        } catch (err) {
            console.log(err);
            response.status(HttpStatus.BAD_REQUEST);
            response.send(err);
            return;
        }

        next();
    }
}

const companiesMiddleware = new CompaniesMiddleware();
export { companiesMiddleware };