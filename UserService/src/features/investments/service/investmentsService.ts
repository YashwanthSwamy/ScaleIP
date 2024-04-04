import { getStatusCode } from "../../shared/services/getStatusCode";
import { Operation } from "../../../externalServices/database/enums/operation";

class InvestmentsService {
    async getCustomerInvestments() {
        try {
            return {
                data: "",
                status: getStatusCode.operationToStatusCode(Operation.BadRequest)
            };
        } catch (operation: any) {
            return {
                data: undefined,
                status: getStatusCode.operationToStatusCode(operation)
            };
        }
    }

    async addCustomerInvestments() {
        try {
            return {
                data: "",
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

const investmentsService = new InvestmentsService();
export { investmentsService }