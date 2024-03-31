import { expect } from 'chai';
import sinon from 'sinon';
import { environmentVariables } from '../../../src/configuration/environmentVariables';
import localDbConnector from '../../../src/externalServices/Database/localDbConnector';

describe('LocalDbConnector', () => {
  let environmentVariablesStub: sinon.SinonStub;

  beforeEach(() => {
    // Stub the environmentVariables.DB_URL to return a dummy URL
    environmentVariablesStub = sinon.stub(environmentVariables, 'DB_URL').value('dummy-db-url');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should return the correct connection URL object', () => {
    // Call the getUrl() method
    const url = localDbConnector.getUrl();

    // Assert that the returned URL object is correct
    expect(url).to.deep.equal({
      client: 'pg',
      connection: 'dummy-db-url'
    });
  });
});
