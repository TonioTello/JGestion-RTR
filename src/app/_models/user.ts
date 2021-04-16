export class User {

  constructor (  id = 0, username = ' ', password = ' ', firstName = ' ', lastName = ' ', token = ' ' ){
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.password = password;
    this.lastName = lastName;
    this.token = token;
}

  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}
