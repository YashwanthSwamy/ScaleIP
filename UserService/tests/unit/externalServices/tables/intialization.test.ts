import { expect } from 'chai';
import sinon from 'sinon';
import { createTable } from '../../../../src/externalServices/Database/tables/createTable';
import { Tables } from '../../../../src/externalServices/Database/constants/tables';
import UserServiceUsers from '../../../../src/externalServices/Database/entities/userServiceUsers/configuration/definition';
import { TableInitializer } from '../../../../src/externalServices/Database/tables/intialization';

describe('TableInitializer', () => {
  let createTableStub: sinon.SinonStub;

  beforeEach(() => {
    createTableStub = sinon.stub(createTable, 'create');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should initialize tables correctly', async () => {
    // Stub createTable method to resolve successfully
    createTableStub.withArgs(Tables.TABLE_USERS, UserServiceUsers.definition).resolves();

    // Call the init method
    await TableInitializer.init();

    // Assertions
    expect(createTableStub.calledOnceWithExactly(Tables.TABLE_USERS, UserServiceUsers.definition)).to.be.true;
  });

  it('should handle errors during table initialization', async () => {
    const error = new Error('Database error');

    // Stub createTable method to reject with an error
    createTableStub.withArgs(Tables.TABLE_USERS, UserServiceUsers.definition).rejects(error);

    // Call the init method
    let errorCaught = false;
    try {
      await TableInitializer.init();
    } catch (err) {
      // Error should be thrown and caught
      errorCaught = true;
      expect(err).to.equal(error);
    }

    // Assertions
    expect(errorCaught).to.be.true;
  });
});
