import { NextFunction, Request, Response } from "express";
import HttpStatus from "http-status-codes";
import { LoginModel } from "../model/loginModel";
import { LoginValidator } from "../validators/loginValidator";

class LoginMiddleware{
    
    public validate(request: Request, response: Response, next: NextFunction) {
        const input: LoginModel = {
          userId: request.body.username,
          password: request.body.password as string
        };
    
        try {
          new LoginValidator(input)
            .validateUserId()
            .validatePassword()
    
        } catch  (err) {
          console.log(err);
          response.status(HttpStatus.BAD_REQUEST);
          response.send(err);
          return;
        }

        next();
      }
}

const loginMiddleware = new LoginMiddleware();
export { loginMiddleware };