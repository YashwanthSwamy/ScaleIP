import { commonValidators } from "../../shared/validators/commonValidators";
import { CompaniesModel } from "../model/companiesModel";

export class CompaniesValidator {
    input: CompaniesModel;

    constructor(request: CompaniesModel) {
      this.input = request;
    }
  
    validateUserId() {
      if (!commonValidators.checkIsValidASCII(this.input.email)) {
        throw new Error("[VALIDATION] email undefined/ not ASCII");
      }
  
      return this;
    }
}