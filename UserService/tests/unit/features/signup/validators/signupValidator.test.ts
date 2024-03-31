import { expect } from 'chai';
import sinon from 'sinon';
import { SignupValidator } from '../../../../../src/features/signup/validators/signupValidator';
import { SignupModel } from '../../../../../src/features/signup/model/signupModel';
import { commonValidators } from '../../../../../src/features/shared/validators/commonValidators';

describe('SignupValidator', () => {
  let input: SignupModel;

  beforeEach(() => {
    input = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123'
    };
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should validate first name', () => {
    const validator = new SignupValidator(input);
    const checkIsValidASCIISpy = sinon.spy(commonValidators, 'checkIsValidASCII');

    validator.validateFirstName();

    expect(checkIsValidASCIISpy.calledOnceWithExactly(input.firstName)).to.be.true;
  });

  it('should validate last name', () => {
    const validator = new SignupValidator(input);
    const checkIsValidASCIISpy = sinon.spy(commonValidators, 'checkIsValidASCII');

    validator.validateLastName();

    expect(checkIsValidASCIISpy.calledOnceWithExactly(input.lastName)).to.be.true;
  });

  it('should validate email', () => {
    const validator = new SignupValidator(input);
    const checkIsValidASCIISpy = sinon.spy(commonValidators, 'checkIsValidASCII');

    validator.validateEmail();

    expect(checkIsValidASCIISpy.calledOnceWithExactly(input.email)).to.be.true;
  });

  it('should validate password', () => {
    const validator = new SignupValidator(input);
    const checkIsValidASCIISpy = sinon.spy(commonValidators, 'checkIsValidASCII');

    validator.validatePassword();

    expect(checkIsValidASCIISpy.calledOnceWithExactly(input.password)).to.be.true;
  });

  it('should throw error if first name is not ASCII', () => {
    input.firstName = '😊'; // Non-ASCII character
    const validator = new SignupValidator(input);

    expect(() => validator.validateFirstName()).to.throw('[VALIDATION] First Name undefined/ not ASCII');
  });
});
