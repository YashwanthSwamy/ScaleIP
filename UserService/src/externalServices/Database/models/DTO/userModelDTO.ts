export interface IUserDBModel {
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
}


export default class UserModelDTO {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  
    constructor(customer: IUserDBModel) {
        this.firstName = customer.FirstName;
        this.lastName = customer.LastName;
        this.email = customer.Email;
        this.password = customer.Password;
    }
  }