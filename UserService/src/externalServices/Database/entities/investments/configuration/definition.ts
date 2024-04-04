import Knex from "knex";

export default class UserServiceInvestments {

  static definition(table: Knex.CreateTableBuilder) {
    table.uuid("id").primary();
    table.string("logo_url");
    table.string("company_name");
    table.dateTime("requested_date");
    table.text("message");
    table.string("status");
    table.string("location");
  }
}
