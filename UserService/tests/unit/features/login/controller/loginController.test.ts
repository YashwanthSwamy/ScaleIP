import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import { Request, Response } from 'express';
import { loginController } from '../../../../../src/features/login/controller/loginController';
import { loginService } from '../../../../../src/features/login/service/loginService';

describe('LoginController', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let sendStub: SinonStub;
  let statusStub: SinonStub;
  let getCustomerInfoIfAuthorizedStub: SinonStub;

  beforeEach(() => {
    req = { body: { username: 'testuser', password: 'testpassword' } };
    sendStub = sinon.stub();
    statusStub = sinon.stub().returns({ send: sendStub });
    res = { status: statusStub } as Partial<Response>;
    getCustomerInfoIfAuthorizedStub = sinon.stub(loginService, 'getCustomerInfoIfAuthorized');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should send customer info if authorized', async () => {
    const expectedResult = { status: 200, data: { name: 'Test User', email: 'test@example.com' } };
    getCustomerInfoIfAuthorizedStub.resolves(expectedResult);

    await loginController.login(req as Request, res as Response);

    expect(getCustomerInfoIfAuthorizedStub.calledOnceWithExactly('testuser', 'testpassword')).to.be.true;
    expect(statusStub.calledOnceWithExactly(200)).to.be.true;
    expect(sendStub.calledOnceWithExactly(expectedResult.data)).to.be.true;
  });

  it('should handle error if authorization fails', async () => {
    const error = new Error('Authorization failed');
    getCustomerInfoIfAuthorizedStub.rejects(error);

    await loginController.login(req as Request, res as Response);

    expect(getCustomerInfoIfAuthorizedStub.calledOnceWithExactly('testuser', 'testpassword')).to.be.true;
    expect(statusStub.calledOnceWithExactly(500)).to.be.true;
    expect(sendStub.calledOnceWithExactly({ error: error.message })).to.be.true;
  });
});
