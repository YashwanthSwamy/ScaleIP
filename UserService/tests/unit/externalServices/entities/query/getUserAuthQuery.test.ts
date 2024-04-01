import { expect } from 'chai';
import sinon from 'sinon';
import { SignupUserModel } from '../../../../../src/externalServices/database/models/DAO/signupUserModel';
import { Operation } from '../../../../../src/externalServices/database/enums/operation';
import db from '../../../../../src/externalServices/Database/dbconnector';
import { environmentVariables } from '../../../../../src/configuration/environmentVariables'
import { GetUserAuthQuery } from '../../../../../src/externalServices/database/entities/userServiceUsers/query/getUserAuthQuery';

describe('GetUserAuthQuery', () => {
    let dbStub: sinon.SinonStub;

    beforeEach(() => {
        dbStub = sinon.stub(db.dbConnector, 'select');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should execute successfully and return the email', async () => {
    });
});
