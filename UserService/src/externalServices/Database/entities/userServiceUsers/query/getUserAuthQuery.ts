import UserModelDTO from "../../../models/DTO/userModelDTO";
import { Operation } from "../../../enums/operation";
import db from "../../../dbconnector";
import { Tables } from "../../../constants/tables";
import { environmentVariables } from "../../../../../configuration/environmentVariables";

type SelectorModel = { Email: string; };

export class GetUserAuthQuery {
    async execute(email: string): Promise<UserModelDTO> {

        let dbResponse;
        try {
            const query: SelectorModel = { Email: email}
            dbResponse = await this.query(query)
        } catch (error) {
            console.error("[DB] fetch user failed", { inputdata: { email }, error: error });
            throw Operation.Error;
        }

        if (dbResponse && dbResponse.length > 0) {
            return new UserModelDTO(dbResponse[0]);
        }
        console.log("[DB] Non-existent customer", {email});
        throw Operation.AlreadyExists;
    }

    private query(selector: SelectorModel) {
        const query = db.dbConnector
            .select('Email', 'Password', 'FirstName', 'LastName')
            .from(`${environmentVariables.SCHEMA_NAME}.${Tables.TABLE_USERS}`)
            .where(selector);
            
        return query.then((response: any) => response);
    }
}

const getUserAuthQuery = new GetUserAuthQuery();
export { getUserAuthQuery }