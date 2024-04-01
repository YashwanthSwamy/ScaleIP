import { commonValidators } from "../../shared/validators/commonValidators";
import { LoginModel } from "../model/loginModel";

export class LoginValidator {
  input: LoginModel;

  constructor(request: LoginModel) {
    this.input = request;
  }

  validateUserId() {
    if (!commonValidators.checkIsValidASCII(this.input.email)) {
      throw new Error("[VALIDATION] user ID undefined/ not ASCII");
    }

    return this;
  }

  validatePassword() {
    if (!commonValidators.checkIsValidASCII(this.input.password)) {
      throw new Error("[VALIDATION] password undefined/ not ASCII");
    }

    return this;
  }
}