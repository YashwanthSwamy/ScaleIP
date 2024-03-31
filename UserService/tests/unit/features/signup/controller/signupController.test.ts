import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import { Request, Response } from 'express';
import { signupController } from '../../../../../src/features/signup/controller/signupController';
import { signupService } from '../../../../../src/features/signup/service/signupService';

describe('SignupController', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let sendStub: SinonStub;
  let statusStub: SinonStub;
  let signupServiceStub: SinonStub;

  beforeEach(() => {
    req = { body: { username: 'testuser', password: 'testpassword' } };
    sendStub = sinon.stub();
    statusStub = sinon.stub().returns({ send: sendStub });
    res = { status: statusStub } as Partial<Response>;
    signupServiceStub = sinon.stub(signupService, 'create');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should send status and result when signup succeeds', async () => {
    const expectedResult = { status: 200, data: { userId: '123', username: 'testuser' } };
    signupServiceStub.resolves(expectedResult);

    await signupController.signup(req as Request, res as Response);

    expect(signupServiceStub.calledOnceWithExactly(req.body)).to.be.true;
    expect(statusStub.calledOnceWithExactly(200)).to.be.true;
    expect(sendStub.calledOnceWithExactly(expectedResult)).to.be.true;
  });

  it('should send status and error when signup fails', async () => {
    const error = new Error('Signup failed');
    signupServiceStub.rejects(error);

    await signupController.signup(req as Request, res as Response);

    expect(signupServiceStub.calledOnceWithExactly(req.body)).to.be.true;
    expect(statusStub.calledOnceWithExactly(500)).to.be.true;
    expect(sendStub.calledOnceWithExactly(error)).to.be.true;
  });
});
