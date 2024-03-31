import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import { Request, Response, NextFunction } from 'express';
import HttpStatus from 'http-status-codes';
import { loginMiddleware } from '../../../../../src/features/login/middleware/LoginMiddleware';
import { LoginValidator } from '../../../../../src/features/login/validators/loginValidator';

describe('LoginMiddleware', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: SinonStub;
  let validateUserIdStub: SinonStub;
  let validatePasswordStub: SinonStub;

  beforeEach(() => {
    req = { body: { username: 'testuser', password: 'testpassword' } };
    res = { status: sinon.stub(), send: sinon.stub() };
    next = sinon.stub();
    validateUserIdStub = sinon.stub(LoginValidator.prototype, 'validateUserId');
    validatePasswordStub = sinon.stub(LoginValidator.prototype, 'validatePassword');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should call next if input is valid', () => {
    validateUserIdStub.returnsThis();
    validatePasswordStub.returnsThis();

    loginMiddleware.validate(req as Request, res as Response, next as NextFunction);

    expect(validateUserIdStub.calledOnceWithExactly()).to.be.true;
    expect(validatePasswordStub.calledOnceWithExactly()).to.be.true;
    expect(next.calledOnce).to.be.true;
  });

  it('should handle error if validation fails', () => {
    const validationError = new Error('Validation error');
    validateUserIdStub.throws(validationError);

    loginMiddleware.validate(req as Request, res as Response, next as NextFunction);

    expect(validateUserIdStub.calledOnceWithExactly()).to.be.true;
    expect(validatePasswordStub.called).to.be.false;
    expect(res?.status.calledOnceWithExactly(HttpStatus.BAD_REQUEST)).to.be.true;
    expect(res?.send.calledOnceWithExactly(validationError)).to.be.true;
    expect(next.called).to.be.false;
  });
});
