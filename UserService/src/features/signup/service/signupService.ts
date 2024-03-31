import signupUserCommand from "../../../externalServices/database/entities/userServiceUsers/command/signupUserCommand";
import { Operation } from "../../../externalServices/database/enums/operation";
import { SignupModel } from "../model/signupModel";
import HttpStatus from "http-status-codes";
import { SignupUserResponseModel } from "../model/signupUserResponseModel";
import PasswordManager from "../../shared/services/passwordManager";

class SignupService {
    async create(customerInfo: SignupModel): Promise<SignupUserResponseModel> {
        try {
            const result = await signupUserCommand.execute(
                {
                    Email: customerInfo.email,
                    FirstName: customerInfo.firstName,
                    LastName: customerInfo.lastName,
                    Password: await PasswordManager.hashPassword(customerInfo.password),
                });

            if (result === Operation.AlreadyExists) {
                return {
                    userId: undefined,
                    status: HttpStatus.CONFLICT
                }
            }

            if (result === Operation.Error) {
                return {
                    userId: undefined,
                    status: HttpStatus.BAD_REQUEST
                }
            }

            return {
                userId: result,
                status: HttpStatus.OK
            };
        } catch (operation: any) {
            return {
                userId: undefined,
                status: HttpStatus.CONFLICT
            };
        }
    }
}

const signupService = new SignupService();
export { signupService };