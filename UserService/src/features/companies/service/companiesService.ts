import { getStatusCode } from "../../shared/services/getStatusCode";
import { Operation } from "../../../externalServices/database/enums/operation";
import  {getCompanyList} from "../../../externalServices/database/entities/companies/query/getCompanyList";


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
            return {
                data: "",
                status: getStatusCode.operationToStatusCode(Operation.BadRequest)
            };
        } catch (operation: any) {
            return {
                data: "",
                status: getStatusCode.operationToStatusCode(operation)
            };
        }
    }
}

const companiesService = new CompaniesService();
export { companiesService };