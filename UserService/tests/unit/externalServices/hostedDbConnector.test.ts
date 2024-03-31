import { expect } from 'chai';
import sinon from 'sinon';
import { environmentVariables } from '../../../src/configuration/environmentVariables';
import hostedDbConnector from '../../../src/externalServices/Database/hostedDbConnector';

describe('HostedDbConnector', () => {
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
    const url = hostedDbConnector.getUrl();

    // Assert
    expect(url).to.deep.equal({
      client: 'pg',
      connection: 'dummy-db-url',
      pool: {
        idleTimeoutMillis: 10000
      }
    });
  });
});
