import { Tables } from "../constants/tables";
import UserServiceInvestments from "../entities/investments/configuration/definition";
import UserServiceUsers from "../entities/userServiceUsers/configuration/definition";
import { createTable } from "./createTable";


export class TableInitializer {

  static async init() {
    await createTable.create(Tables.TABLE_USERS, UserServiceUsers.definition);
    await createTable.create(Tables.TABLE_INVESTMENTS, UserServiceInvestments.definition);
  }
}
