import { environmentVariables } from "../../configuration/environmentVariables";

class LocalDbConnector {
  
  public getUrl() {
    const schemaName = environmentVariables.SCHEMA_NAME;
    const connectionString = `${environmentVariables.DB_URL}?currentSchema=${schemaName}`;

    return {
      client: "pg",
      connection: connectionString,
    };
  }
}

const localDbConnector = new LocalDbConnector();
export default localDbConnector;
