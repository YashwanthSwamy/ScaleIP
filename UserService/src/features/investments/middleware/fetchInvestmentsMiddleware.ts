import { NextFunction, Request, Response } from "express";
import HttpStatus from "http-status-codes";
import { FetchInvestmentsModel } from "../model/fetchInvestmentsModel";
import { FetchInvestmentsValidator } from "../validators/fetchInvestmentsValidator";

class FetchInvestmentsMiddleware{
    
    public validate(request: Request, response: Response, next: NextFunction) {
        const input: FetchInvestmentsModel = {
          email: request.query.email as string
        };
    
        try {
          new FetchInvestmentsValidator(input)
            .validateEmail()
    
        } catch  (err) {
          console.log(err);
          response.status(HttpStatus.BAD_REQUEST);
          response.send(err);
          return;
        }

        next();
      }
}

const fetchInvestmentsMiddleware = new FetchInvestmentsMiddleware();
export { fetchInvestmentsMiddleware };