import { expect } from 'chai';
import sinon from 'sinon';
import Knex from 'knex';
import hostedDbConnector from '../../../src/externalServices/Database/hostedDbConnector';
import localDbConnector from '../../../src/externalServices/Database/localDbConnector';
import db from '../../../src/externalServices/Database/dbconnector';
import cfenv from 'cfenv';

describe('DBConnector', () => {
  let isLocalStub: sinon.SinonStub;
  let getAppEnvStub: sinon.SinonStub;
  let knexStub: sinon.SinonStub;

  beforeEach(() => {
    isLocalStub = sinon.stub().returns(false);
    getAppEnvStub = sinon.stub(cfenv, 'getAppEnv').returns({ isLocal: isLocalStub });
    knexStub = sinon.stub(Knex.prototype, 'constructor');
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('when running in hosted environment', () => {
    beforeEach(() => {
      isLocalStub.returns(false);
    });

    it('should use hosted database connector', () => {
      const expectedUrl = 'hosted-url';
      const getUrlStub = sinon.stub(hostedDbConnector, 'getUrl').returns(expectedUrl);

      expect(getUrlStub.calledOnce).to.be.true;
      expect(knexStub.calledOnceWithExactly({ client: 'pg', connection: expectedUrl })).to.be.true;
      expect(db.dbConnector).to.be.instanceOf(Knex);

      getUrlStub.restore();
    });
  });

  describe('when running in local environment', () => {
    beforeEach(() => {
      isLocalStub.returns(true);
    });

    it('should use local database connector', () => {
      const expectedUrl = 'local-url';
      const getUrlStub = sinon.stub(localDbConnector, 'getUrl').returns(expectedUrl);

      expect(getUrlStub.calledOnce).to.be.true;
      expect(knexStub.calledOnceWithExactly({ client: 'pg', connection: expectedUrl })).to.be.true;
      expect(db.dbConnector).to.be.instanceOf(Knex);

      getUrlStub.restore();
    });
  });
});
