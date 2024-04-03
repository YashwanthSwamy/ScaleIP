import UserModelDTO from "../../../models/DTO/userModelDTO";
import { Operation } from "../../../enums/operation";
import db from "../../../dbconnector";
import { Tables } from "../../../constants/tables";
import { environmentVariables } from "../../../../../configuration/environmentVariables";

type SelectorModel = { id: string; };

export class GetCompanyDetails {
    async execute(id: string): Promise<UserModelDTO> {

        let dbResponse;
        try {
            const query: SelectorModel = { id }
            dbResponse = await this.query(query)
        } catch (error) {
            console.error("[DB] [DB] Fetch Get Company Details failed", { inputdata: { id }, error: error });
            throw Operation.Error;
        }

        if (dbResponse && dbResponse.length > 0) {
            return new UserModelDTO(dbResponse[0]);
        }
        console.log("[DB] Non-existent customer", { id });
        throw Operation.AlreadyExists;
    }

    private query(selector: SelectorModel) {
        const query = db.dbConnector
            .select()
            .from(`${environmentVariables.SCHEMA_NAME}.${Tables.TABLE_USERS}`)
            .where(selector);

        return query.then((response: any) => response);
    }
}

const getCompanyDetails = new GetCompanyDetails();
export { getCompanyDetails }