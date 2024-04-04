import { NextFunction, Request, Response } from "express";
import HttpStatus from "http-status-codes";
import { AddInvestmentsModel } from "../model/addInvestmentsModel";
import { AddInvestmentsValidator } from "../validators/addInvestmentsValidator";

class AddInvestmentsMiddleware {

  public validate(request: Request, response: Response, next: NextFunction) {
    const input: AddInvestmentsModel = {
      email: request.body.email,
      logo_url: request.body.logo_url,
      company_name: request.body.company_name,
      location: request.body.location,
      status: request.body.status,
      message: request.body.message,
      requested_date: request.body.requested_date
    };

    try {
      new AddInvestmentsValidator(input)
        .validateEmail()
        .validateCompanyName()
        .validateLocation()
        .validateLogoUrl()
        .validateMessage()
        .validateRequestedDate()
        .validateStatus()

    } catch (err) {
      console.log(err);
      response.status(HttpStatus.BAD_REQUEST);
      response.send(err);
      return;
    }

    next();
  }
}

const addInvestmentsMiddleware = new AddInvestmentsMiddleware();
export { addInvestmentsMiddleware };