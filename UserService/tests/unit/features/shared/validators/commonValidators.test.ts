import { expect } from 'chai';
import sinon from 'sinon';
import { commonValidators } from '../../../../../src/features/shared/validators/commonValidators';

describe('CommonValidators', () => {

  beforeEach(() => {
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('checkIsValidASCII', () => {
    it('should return true for valid ASCII input', () => {
      const isValidSpy = sinon.stub().returns(true);
      sinon.replace(commonValidators, 'checkIsValidASCII', isValidSpy);

      const result = commonValidators.checkIsValidASCII('test');

      expect(result).to.be.true;
      expect(isValidSpy.calledOnceWithExactly('test')).to.be.true;
    });

    it('should return false for non-ASCII input', () => {
      const isValidSpy = sinon.stub().returns(false);
      sinon.replace(commonValidators, 'checkIsValidASCII', isValidSpy);

      const result = commonValidators.checkIsValidASCII('😊');

      expect(result).to.be.false;
      expect(isValidSpy.calledOnceWithExactly('😊')).to.be.true;
    });
  });

});
