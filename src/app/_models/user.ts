export class User {

  constructor (  id = 0, nombre = ' ', apellido = ' ', email = ' ', password = ' ', cargo = ' ',  rol = ' ' ){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
    this.cargo = apellido;
    this.rol = rol;
}

  id: number;
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  cargo: string;
  rol: string;

}

