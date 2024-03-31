import Knex from "knex";

export default class UserServiceUsers {

  static definition(table: Knex.CreateTableBuilder) {
    table.string("Email").notNullable();
    table.primary(["Email"]);
    table.string("FirstName").notNullable();
    table.string("LastName").notNullable();
    table.string("Password").notNullable();
  }
}
