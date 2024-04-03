import { Request, Response } from "express";
import { companiesService } from "../service/companiesService";

class CompaniesController {
    async getCompanyList(req: Request, res: Response) {
        console.log("[Controller] Get Company List", { input: req.query })
        const result = await companiesService.getList();
        res.status(result.status);
        res.send(result.data);
    }

    async getCompanyDetails(req: Request, res: Response) {
        console.log("[Controller] Get Company Details", { input: req.body.companyId })
        const result = await companiesService.getDetails(req.query.id as string)
        res.status(result.status);
        res.send(result.data);
    }
}

const companiesController = new CompaniesController()
export { companiesController }