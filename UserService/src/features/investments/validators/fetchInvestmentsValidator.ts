import { commonValidators } from "../../shared/validators/commonValidators";
import { FetchInvestmentsModel } from "../model/fetchInvestmentsModel";

export class FetchInvestmentsValidator {
  input: FetchInvestmentsModel;

  constructor(request: FetchInvestmentsModel) {
    this.input = request;
  }

  validateEmail() {
    if (!commonValidators.checkIsValidASCII(this.input.email)) {
      throw new Error("[VALIDATION] email undefined/ not ASCII");
    }

    return this;
  }
}