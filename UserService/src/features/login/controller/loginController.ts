import { Request, Response } from "express";
import { loginService } from "../service/loginService";

class LoginController {
    async login(req: Request, res: Response) {
        console.log("[Controller] Login", { input: req.body.email })
        const result = await loginService.getCustomerInfoIfAuthorized(req.body.email, req.body.password as string)
        res.status(result.status);
        res.send(result.data);
    }
}

const loginController = new LoginController()
export { loginController }