import CompanyDetailsModelDTO from "../../../models/DTO/companyDetailsModelDTO";
import { Operation } from "../../../enums/operation";
import db from "../../../dbconnector";
import { Tables } from "../../../constants/tables";
import { environmentVariables } from "../../../../../configuration/environmentVariables";

type SelectorModel = { id: string; };

export class GetCompanyDetails {
    async execute(id: string): Promise<CompanyDetailsModelDTO> {

        let dbResponse;
        try {
            const query: SelectorModel = { id }
            dbResponse = await this.query(query)
        } catch (error) {
            console.error("[DB] [DB] Fetch Get Company Details failed", { inputdata: { id }, error: error });
            throw Operation.Error;
        }

        if (dbResponse && dbResponse.length > 0) {
            return new CompanyDetailsModelDTO(dbResponse[0]);
        }
        console.log("[DB] Non-existent customer", { id });
        throw Operation.AlreadyExists;
    }

    private async query(selector: SelectorModel) {
        const query = db.dbConnector
            .select(
                'id',
                'name',
                'logo_url',
                'website_url',
                'linkedin_url',
                'twitter_url',
                'facebook_url',
                'angellist_url',
                'founded_year',
                'publicly_traded_symbol',
                'publicly_traded_exchange',
                'alexa_ranking',
                'industry',
                'estimated_num_employees',
                'raw_address',
                'short_description',
                'annual_revenue_printed',
                'total_funding_printed',
                'latest_funding_round_date',
                'keywords'
            )
            .from(`${environmentVariables.SCHEMA_NAME}.${Tables.TABLE_COMPANIES}`)
            .where(selector);

        return query.then((response: any) => response);
    }
}

const getCompanyDetails = new GetCompanyDetails();
export { getCompanyDetails }