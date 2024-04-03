import { commonValidators } from "../../shared/validators/commonValidators";
import { CompanyDetailsModel } from "../model/companyDetailsModel";

export class CompanyDetailsValidator {
    input: CompanyDetailsModel;

    constructor(request: CompanyDetailsModel) {
      this.input = request;
    }
  
    validateCompanyId() {
      if (!commonValidators.checkIsValidASCII(this.input.companyId)) {
        throw new Error("[VALIDATION] company ID undefined/ not ASCII");
      }
  
      return this;
    }
}