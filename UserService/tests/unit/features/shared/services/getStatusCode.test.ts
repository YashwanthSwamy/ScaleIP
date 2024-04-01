import { expect } from 'chai';
import HttpStatus from 'http-status-codes';
import { Operation } from '../../../../../src/externalServices/database/enums/operation';
import { getStatusCode } from '../../../../../src/features/shared/services/getStatusCode';

describe('GetStatusCode', () => {

  beforeEach(() => {
  });

  it('should return OK status code for Operation.Success', () => {
    const statusCode = getStatusCode.operationToStatusCode(Operation.Success);

    expect(statusCode).to.equal(HttpStatus.OK);
  });
});
