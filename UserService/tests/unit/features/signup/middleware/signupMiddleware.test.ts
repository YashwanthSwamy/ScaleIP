import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import { Request, Response, NextFunction } from 'express';
import HttpStatus from 'http-status-codes';
import { signupMiddleware } from '../../../../../src/features/signup/middleware/signupMiddleware';
import { SignupValidator } from '../../../../../src/features/signup/validators/signupValidator';

describe('SignupMiddleware', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: SinonStub;
    let validateLastNameStub: SinonStub;
    let validateFirstNameStub: SinonStub;
    let validateEmailStub: SinonStub;
    let validatePasswordStub: SinonStub;

    beforeEach(() => {
        req = {
            body: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                password: 'password123'
            }
        };
        res = { status: sinon.stub(), send: sinon.stub() };
        next = sinon.stub();
        validateLastNameStub = sinon.stub(SignupValidator.prototype, 'validateLastName');
        validateFirstNameStub = sinon.stub(SignupValidator.prototype, 'validateFirstName');
        validateEmailStub = sinon.stub(SignupValidator.prototype, 'validateEmail');
        validatePasswordStub = sinon.stub(SignupValidator.prototype, 'validatePassword');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should call next if input is valid', () => {
        validateLastNameStub.returnsThis();
        validateFirstNameStub.returnsThis();
        validateEmailStub.returnsThis();
        validatePasswordStub.returnsThis();

        signupMiddleware.validate(req as Request, res as Response, next as NextFunction);

        expect(validateLastNameStub.calledOnceWithExactly()).to.be.true;
        expect(validateFirstNameStub.calledOnceWithExactly()).to.be.true;
        expect(validateEmailStub.calledOnceWithExactly()).to.be.true;
        expect(validatePasswordStub.calledOnceWithExactly()).to.be.true;
        expect(next.calledOnce).to.be.true;
    });

    it('should handle error if validation fails', () => {
        const validationError = new Error('Validation error');
        validateLastNameStub.throws(validationError);

        signupMiddleware.validate(req as Request, res as Response, next as NextFunction);

        expect(validateLastNameStub.calledOnceWithExactly()).to.be.true;
        expect(validateFirstNameStub.called).to.be.false;
        expect(validateEmailStub.called).to.be.false;
        expect(validatePasswordStub.called).to.be.false;
        expect(res.status.calledOnceWithExactly(HttpStatus.BAD_REQUEST)).to.be.true;
        expect(res.send.calledOnceWithExactly(validationError)).to.be.true;
        expect(next.called).to.be.false;
    });
});
