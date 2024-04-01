import { expect } from 'chai';
import sinon from 'sinon';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import PasswordManager from '../../../../../src/features/shared/services/passwordManager';

describe('PasswordManager', () => {
    afterEach(() => {
        sinon.restore();
    });

    describe('hashPassword', () => {
        it('should hash the password', async () => {
            const hashedPassword = 'hashedPassword';
            const bcryptHashStub = sinon.stub(bcrypt, 'hash').resolves(hashedPassword);

            const password = 'password';
            const result = await PasswordManager.hashPassword(password);

            expect(bcryptHashStub.calledOnceWith(password, 10)).to.be.true;

            expect(result).to.equal(hashedPassword);
        });
    });

    describe('comparePasswords', () => {
        it('should compare passwords and return true if they match', async () => {
            const bcryptCompareStub = sinon.stub(bcrypt, 'compare').resolves(true);
            const plainPassword = 'plainPassword';
            const hashedPassword = 'hashedPassword';
            const result = await PasswordManager.comparePasswords(plainPassword, hashedPassword);

            expect(bcryptCompareStub.calledOnceWith(plainPassword, hashedPassword)).to.be.true;

            expect(result).to.be.true;
        });

        it('should compare passwords and return false if they do not match', async () => {
            const bcryptCompareStub = sinon.stub(bcrypt, 'compare').resolves(false);

            const plainPassword = 'plainPassword';
            const hashedPassword = 'hashedPassword';
            const result = await PasswordManager.comparePasswords(plainPassword, hashedPassword);

            expect(bcryptCompareStub.calledOnceWith(plainPassword, hashedPassword)).to.be.true;

            expect(result).to.be.false;
        });
    });

    describe('generateToken', () => {
        it('should generate a JWT token', () => {
            const token = 'jwtToken';
            const jwtSignStub = sinon.stub(jwt, 'sign').returns(token);

            const payload = { userId: '123' };
            const secret = 'secret';
            const expiresIn = '1h';
            const result = PasswordManager.generateToken(payload, secret, expiresIn);

            expect(jwtSignStub.calledOnceWith({ data: payload }, secret, { expiresIn })).to.be.true;

            expect(result).to.equal(token);
        });
    });
});
