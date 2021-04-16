export class Venta {

  constructor (  _id = '', nitCliente = ' ', nombreCliente = ' ',  nombreEquipo = ' ', numeroSerie = ' ', numeroFactura = ' ', cantidad = ' ',  vendedor = ' ',
   fechaVenta = ' ',  fechaInstalacion = ' ',responsableInstalacion = ' ', observaciones = ' ' ){
    this._id = _id;
    this.nitCliente = nitCliente;
    this.nombreCliente = nombreCliente;
    this.nombreEquipo = nombreEquipo;
    this.numeroSerie = numeroSerie;
    this.numeroFactura = numeroFactura;
    this.cantidad = cantidad;
    this.vendedor = vendedor;
    this.fechaVenta = fechaVenta;
    this.fechaInstalacion = fechaInstalacion;
    this.responsableInstalacion = responsableInstalacion;
    this.observaciones = observaciones;


}

  _id: String;
  nitCliente: String;
  nombreCliente: String;
  nombreEquipo: String;
  numeroSerie: String;
  numeroFactura: String;
  cantidad: String;
  vendedor: String;
  fechaVenta: String;
  fechaInstalacion: String;
  responsableInstalacion: String;
  observaciones: String;

}
