import { Request, Response } from "express";
import { investmentsService } from "../service/investmentsService";

class InvestmentsController {
    async fetch(req: Request, res: Response) {
        console.log("[Controller] Get Investments", { input: req.query.email })
        const result = await investmentsService.getCustomerInvestments()
        res.status(result.status);
        res.send(result.data);
    }

    async add(req: Request, res: Response) {
        console.log("[Controller] Add Investments", { input: req.body.email })
        const result = await investmentsService.addCustomerInvestments()
        res.status(result.status);
        res.send(result.data);
    }
}

const investmentsController = new InvestmentsController()
export { investmentsController }