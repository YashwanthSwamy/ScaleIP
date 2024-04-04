import { jwtDecode } from "jwt-decode";

class JwtUtils {
    static decodeToken(token) {
        try {
            const decodedToken = jwtDecode(token);
            return decodedToken;
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    }
}

export default JwtUtils;
