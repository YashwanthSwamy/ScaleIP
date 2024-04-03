import { getStatusCode } from "../../shared/services/getStatusCode";
import { Operation } from "../../../externalServices/database/enums/operation";

class CompaniesService {
    async getList() {
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