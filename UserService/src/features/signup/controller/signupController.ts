import { Request, Response } from "express";
import { signupService } from "../service/signupService";

class SignupController {
    async signup(req: Request, res: Response) {
        console.log("[Controller] Add User", { input: req.body });
        const result = await signupService.create(req.body);
        res.status(result.status);
        res.send(result);
    }
}

const signupController = new SignupController();
export { signupController }