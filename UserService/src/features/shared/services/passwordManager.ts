import bcrypt from 'bcrypt';

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
}

export default PasswordManager;
