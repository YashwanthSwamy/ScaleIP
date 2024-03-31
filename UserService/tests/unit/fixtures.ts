process.env.APP_NAME = "venturevista-userservice";
process.env.SQL_DB_URI = 'postgresql://postgres:postgres@localhost:32768/postgres';

export const mochaGlobalTeardown = async () => {
  delete process.env.APP_NAME;
  delete process.env.SQL_DB_URI;
};