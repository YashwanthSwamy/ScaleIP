import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class PasswordManager {
  static async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }

  static async comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
  }

  static generateToken(payload: any, secret: string, expiresIn: string | number): string {
    return jwt.sign({data: payload}, secret , { expiresIn });
  }
}

export default PasswordManager;
