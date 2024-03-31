import { NextFunction, Request, Response } from "express";
import HttpStatus from "http-status-codes";
import { SignupModel } from "../model/signupModel";
import { CreateUserValidator } from "../validators/signupValidator";

class SignupMiddleware {

  public validate(request: Request, response: Response, next: NextFunction) {
    const input: SignupModel = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
    };

    try {
      new CreateUserValidator(input)
        .validateLastName()
        .validateFirstName()
        .validateEmail()
        .validatePassword()

    } catch (err) {
      console.log(err);
      response.status(HttpStatus.BAD_REQUEST);
      response.send(err);
      return;
    }

    next();
  }
}

const signupMiddleware = new SignupMiddleware();
export { signupMiddleware };