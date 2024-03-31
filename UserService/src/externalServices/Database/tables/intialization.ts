import { Tables } from "../constants/tables";
import UserServiceUsers from "../entities/userServiceUsers/configuration/definition";
import { createTable } from "./createTable";


export class TableInitializer {

  static async init() {
    await createTable.create(Tables.TABLE_USERS, UserServiceUsers.definition);
  }
}
