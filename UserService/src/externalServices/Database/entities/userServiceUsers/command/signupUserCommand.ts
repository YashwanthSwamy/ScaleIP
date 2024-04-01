
import { Operation } from "../../../enums/operation";
import { Tables } from "../../../constants/tables";
import db from "../../../dbconnector";
import { SignupUserModel } from "../../../models/DAO/signupUserModel";
import { environmentVariables } from "../../../../../configuration/environmentVariables";


export class SignupUserCommand {

    async execute(request: SignupUserModel): Promise<number> {
        const dbResponse = await this.query(request)

        if (dbResponse === "None") {
            throw Operation.AlreadyExists;
        }

        if (dbResponse && dbResponse.length > 0) {
            return dbResponse[0].Email;
        }
        console.log(`[DB] Already exist`, { inputData: request });
        throw Operation.AlreadyExists;
    }

    private async query(request: SignupUserModel) {
        try {
            const query = db.dbConnector
                .insert(request)
                .into(`${environmentVariables.SCHEMA_NAME}.${Tables.TABLE_USERS}`)
                .returning(["Email"]);

            const response = await query;
            return response;
        } catch (error) {
            return "None"
        }
    }
}

const signupUserCommand = new SignupUserCommand();
export default signupUserCommand;