import { expect } from 'chai';
import sinon from 'sinon';
import Knex, { CreateTableBuilder } from 'knex';
import { environmentVariables } from '../../../../src/configuration/environmentVariables';
import { createTable } from '../../../../src/externalServices/Database/tables/createTable';
import db from '../../../../src/externalServices/Database/dbconnector';


describe('CreateTable', () => {
  let dbConnectorStub: sinon.SinonStub;
  let schemaStub: sinon.SinonStub;
  let hasTableStub: sinon.SinonStub;
  let createTableStub: sinon.SinonStub;

  beforeEach(() => {
    dbConnectorStub = sinon.stub(db, 'dbConnector');
    schemaStub = sinon.stub();
    hasTableStub = sinon.stub();
    createTableStub = sinon.stub();

    dbConnectorStub.returns({
      schema: schemaStub
    });

    schemaStub.withArgs(environmentVariables.SCHEMA_NAME).returns({
      hasTable: hasTableStub,
      createTable: createTableStub
    });
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should create table if it does not exist', async () => {
    const tableName = 'test_table';
    const tableConfiguration: (builder: CreateTableBuilder) => void = () => {
      // Table configuration function
    };

    // Stub hasTable to return false (table does not exist)
    hasTableStub.withArgs(tableName).resolves(false);

    // Stub createTable to resolve successfully
    createTableStub.withArgs(tableName, tableConfiguration).resolves();

    // Call the create method
    await createTable.create(tableName, tableConfiguration);

    // Assertions
    expect(hasTableStub.calledOnceWithExactly(tableName)).to.be.true;
    expect(createTableStub.calledOnceWithExactly(tableName, tableConfiguration)).to.be.true;
  });

  it('should not create table if it already exists', async () => {
    const tableName = 'test_table';
    const tableConfiguration: (builder: CreateTableBuilder) => void = () => {
      // Table configuration function
    };

    // Stub hasTable to return true (table exists)
    hasTableStub.withArgs(tableName).resolves(true);

    // Call the create method
    await createTable.create(tableName, tableConfiguration);

    // Assertions
    expect(hasTableStub.calledOnceWithExactly(tableName)).to.be.true;
    expect(createTableStub.called).to.be.false; // createTable method should not be called
  });

  it('should handle errors during table creation', async () => {
    const tableName = 'test_table';
    const tableConfiguration: (builder: CreateTableBuilder) => void = () => {
      // Table configuration function
    };

    const error = new Error('Database error');

    // Stub hasTable to return false (table does not exist)
    hasTableStub.withArgs(tableName).resolves(false);

    // Stub createTable to reject with an error
    createTableStub.withArgs(tableName, tableConfiguration).rejects(error);

    // Call the create method
    let errorCaught = false;
    try {
      await createTable.create(tableName, tableConfiguration);
    } catch (err) {
      // Error should be thrown and caught
      errorCaught = true;
      expect(err).to.equal(error);
    }

    // Assertions
    expect(errorCaught).to.be.true;
  });
});
