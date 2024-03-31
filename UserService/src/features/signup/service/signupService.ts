import { SignupModel } from "../model/signupModel";

class SignupService {
    async create(customerInfo: SignupModel){
        return {
            data: "Logged In",
            status: 200
        };
    }
}

const signupService = new SignupService();
export { signupService };