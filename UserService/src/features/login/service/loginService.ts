import  {getUserAuthQuery} from "../../../externalServices/database/entities/userServiceUsers/query/getUserAuthQuery";
import  {getStatusCode} from "../../shared/services/getStatusCode";
import { Operation } from "../../../externalServices/database/enums/operation";
import PasswordManager from "../../shared/services/passwordManager";
import { environmentVariables } from "../../../configuration/environmentVariables";

class LoginService {
    async getCustomerInfoIfAuthorized(userId: string, password: string) {
        try {
            const result = await getUserAuthQuery.execute(userId);
            const isMatch = await PasswordManager.comparePasswords(password, result.password)
            if (isMatch){
                const token = PasswordManager.generateToken(result, environmentVariables.TOKEN_SECRET, environmentVariables.TOKEN_EXPIRES_IN);
                return {
                    data: token,
                    status: getStatusCode.operationToStatusCode(Operation.Success)
                };
            }
            return {
                data: undefined,
                status: getStatusCode.operationToStatusCode(Operation.BadRequest)
            };
        } catch (operation: any) {
            return {
                data: undefined,
                status: getStatusCode.operationToStatusCode(operation)
            };
        }
    }
}

const loginService = new LoginService();
export { loginService }