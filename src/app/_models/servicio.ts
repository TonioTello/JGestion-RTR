export class Servicio {

  constructor (  _id = '', tipoServicio = ' ', quienNotifica = ' ',  cargo = ' ', telefono = ' ', email = ' ', fechaServicio = ' ',  quienRecibe = ' ',
   quienEjecuta = ' ',  numeroOrden = ' ',estadoFisico = ' ', observaciones = ' ', estadoFuncional = ' ', tiempoEjecucion = ' ', estado = ' ', cliente = ' ',  equipo= ' ' ){
    this._id = _id;
    this.tipoServicio = tipoServicio;
    this.quienNotifica = quienNotifica;
    this.cargo = cargo;
    this.telefono = telefono;
    this.email = email;
    this.fechaServicio = fechaServicio;
    this.quienRecibe = quienRecibe;
    this.quienEjecuta = quienEjecuta;
    this.numeroOrden = numeroOrden;
    this.estadoFisico = estadoFisico;
    this.estadoFuncional = estadoFuncional;
    this.tiempoEjecucion = tiempoEjecucion;
    this.estado = estado;
    this.observaciones = observaciones;
    this.cliente = cliente;
    this.equipo = equipo;

}

  _id: String;
  tipoServicio: String;
  quienNotifica: String;
  cargo: String;
  telefono: String;
  email: String;
  fechaServicio: String;
  quienRecibe: String;
  quienEjecuta: String;
  numeroOrden: String;
  estadoFisico: String;
  estadoFuncional: String;
  tiempoEjecucion: String;
  estado: String;
  observaciones: String;
  cliente: String;
  equipo: String;

}
