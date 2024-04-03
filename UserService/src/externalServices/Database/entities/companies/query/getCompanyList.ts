import CompaniesListModelDTO from "../../../models/DTO/companiesListModelDTO";
import { Operation } from "../../../enums/operation";
import db from "../../../dbconnector";
import { Tables } from "../../../constants/tables";
import { environmentVariables } from "../../../../../configuration/environmentVariables";


export class GetCompanyList {
    async execute(): Promise<CompaniesListModelDTO> {
        let dbResponse;
        try {
            dbResponse = await this.query()
        } catch (error) {
            console.error("[DB] Fetch Get Company List failed", { error: error });
            throw Operation.Error;
        }

        if (dbResponse && dbResponse.length > 0) {
            return new CompaniesListModelDTO(dbResponse);
        }
        throw Operation.Error;
    }

    private async query() {
        const query = db.dbConnector
            .select('id', 'name', 'logo_url', 'website_url', 'city', 'state')
            .from(`${environmentVariables.SCHEMA_NAME}.${Tables.TABLE_COMPANIES}`)

        return query.then((response: any) => response);
    }
}

const getCompanyList = new GetCompanyList();
export { getCompanyList }