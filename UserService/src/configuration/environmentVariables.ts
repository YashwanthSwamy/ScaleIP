import { get } from "env-var";

// use .env.example to create your environment variables
class EnvironmentVariables{
    PORT !: number;
    DB_URL !: string;
    INSTANCE_INDEX !: string | undefined;

    constructor() {
        this.init();
    }

    init() {
        this.PORT = get("PORT").default("8080").asIntPositive();
        this.INSTANCE_INDEX = get("INSTANCE_INDEX").asString();
        this.DB_URL = get("SQL_DB_URI").default("").asString();
    }
}

const environmentVariables = new EnvironmentVariables();
export { environmentVariables };