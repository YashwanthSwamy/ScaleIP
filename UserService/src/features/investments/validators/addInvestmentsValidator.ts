import { commonValidators } from "../../shared/validators/commonValidators";
import { AddInvestmentsModel } from "../model/addInvestmentsModel";

export class AddInvestmentsValidator {
  input: AddInvestmentsModel;

  constructor(request: AddInvestmentsModel) {
    this.input = request;
  }

  validateEmail() {
    if (!commonValidators.checkIsValidASCII(this.input.email)) {
      throw new Error("[VALIDATION] email undefined/ not ASCII");
    }

    return this;
  }

  validateLogoUrl() {
    if (!commonValidators.checkIsValidASCII(this.input.logo_url)) {
      throw new Error("[VALIDATION] Logo Url undefined/ not ASCII");
    }

    return this;
  }

  validateCompanyName() {
    if (!commonValidators.checkIsValidASCII(this.input.company_name)) {
      throw new Error("[VALIDATION] Company Name undefined/ not ASCII");
    }

    return this;
  }

  validateLocation() {
    if (!commonValidators.checkIsValidASCII(this.input.location)) {
      throw new Error("[VALIDATION] Location undefined/ not ASCII");
    }

    return this;
  }

  validateRequestedDate() {
    if (!commonValidators.checkIsValidISO(this.input.requested_date)) {
      throw new Error("[VALIDATION] Requested Date undefined/ not Valid ISO");
    }

    return this;
  }

  validateStatus() {
    if (!commonValidators.checkIsValidASCII(this.input.status)) {
      throw new Error("[VALIDATION] Status undefined/ not ASCII");
    }

    return this;
  }

  validateMessage() {
    if (!this.input.message) {
      throw new Error("[VALIDATION] Message undefined/ not ASCII");
    }

    return this;
  }
}