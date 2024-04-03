import { getStatusCode } from "../../shared/services/getStatusCode";
import { Operation } from "../../../externalServices/database/enums/operation";
import { getCompanyList } from "../../../externalServices/database/entities/companies/query/getCompanyList";
import { getCompanyDetails } from "../../../externalServices/database/entities/companies/query/getCompanyDetails";

class CompaniesService {
    async getList() {
        try {
            const result = await getCompanyList.execute();
            return {
                data: result,
                status: getStatusCode.operationToStatusCode(Operation.Success)
            };
        } catch (operation: any) {
            return {
                data: undefined,
                status: getStatusCode.operationToStatusCode(operation)
            };
        }
    }

    async getDetails(companyId: string) {
        try {
            const result = await getCompanyDetails.execute(companyId);
            return {
                data: result,
                status: getStatusCode.operationToStatusCode(Operation.Success)
            };
        } catch (operation: any) {
            return {
                data: undefined,
                status: getStatusCode.operationToStatusCode(operation)
            };
        }
    }
}

const companiesService = new CompaniesService();
export { companiesService };