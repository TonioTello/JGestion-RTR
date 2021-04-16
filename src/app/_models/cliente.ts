export class Cliente {

  constructor (  _id = '', nit = ' ', nombreRepresentante = ' ',  nombreContacto = ' ', empresa = ' ', ciudad = ' ', telefono1 = ' ',  email1 = ' ', telefono2 = ' ',  email2 = ' ',direccion = ' ', observaciones = ' ', token = ' ' ){
    this._id = _id;
    this.nit = nit;
    this.nombreRepresentante = nombreRepresentante;
    this.nombreContacto = nombreContacto;
    this.empresa = empresa;
    this.ciudad = ciudad;
    this.telefono1 = telefono1;
    this.email1 = email1;
    this.telefono2 = telefono2;
    this.email2 = email2;
    this.direccion = direccion;
    this.observaciones = observaciones;
    this.token = token;
}

  _id: string;
  nit: string;
  nombreRepresentante: string;
  nombreContacto: string;
  empresa: string;
  ciudad: string;
  telefono1: string;
  email1: string;
  telefono2: string;
  email2: string;
  direccion: string;
  observaciones: string;
  token: string;
}
