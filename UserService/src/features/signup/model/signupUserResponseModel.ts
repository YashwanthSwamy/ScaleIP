import { Operation } from "../../../externalServices/database/enums/operation";

export interface SignupUserResponseModel {
    userId?: number;
    status: Operation;
  }