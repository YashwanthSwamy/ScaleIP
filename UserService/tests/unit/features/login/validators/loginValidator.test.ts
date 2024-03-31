import { expect } from 'chai';
import sinon from 'sinon';
import { LoginValidator } from '../../../../../src/features/login/validators/loginValidator';
import { LoginModel } from '../../../../../src/features/login/model/loginModel';
import { commonValidators } from '../../../../../src/features/shared/validators/commonValidators';

describe('LoginValidator', () => {
  let input: LoginModel;

  beforeEach(() => {
    input = {
      userId: 'testuser',
      password: 'password123'
    };
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should validate user ID', () => {
    const validator = new LoginValidator(input);
    const checkIsValidASCIISpy = sinon.spy(commonValidators, 'checkIsValidASCII');

    validator.validateUserId();

    expect(checkIsValidASCIISpy.calledOnceWithExactly(input.userId)).to.be.true;
  });

  it('should validate password', () => {
    const validator = new LoginValidator(input);
    const checkIsValidASCIISpy = sinon.spy(commonValidators, 'checkIsValidASCII');

    validator.validatePassword();

    expect(checkIsValidASCIISpy.calledOnceWithExactly(input.password)).to.be.true;
  });

  it('should throw error if user ID is not ASCII', () => {
    input.userId = '😊'; // Non-ASCII character
    const validator = new LoginValidator(input);

    expect(() => validator.validateUserId()).to.throw('[VALIDATION] user ID undefined/ not ASCII');
  });
});
