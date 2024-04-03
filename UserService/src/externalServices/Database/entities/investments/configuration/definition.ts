import Knex from "knex";

export default class UserServiceInvestments {

  static definition(table: Knex.CreateTableBuilder) {
    table.uuid("id").primary();
    table.string("company");
    table.string("name");
    table.dateTime("requested_date");
    table.string("status");
    table.string("location");
    table.string("action");
  }
}
