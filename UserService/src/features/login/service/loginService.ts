

class LoginService {
    async getCustomerInfoIfAuthorized(userId: string, password: string) {
        return {
            data: "Logged In",
            status: 200
        };
    }
}

const loginService = new LoginService();
export { loginService }