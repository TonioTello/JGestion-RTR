export class Equipo {

    constructor (  _id = ' ', nombre = '', serial = ' ',  marca = ' ', modelo = ' ', registro_invima = ' ', vencimiento_invima = ' ', proveedor = ' ', pais_fabricacion = ' ',
    garantia = ' ',  quien_recibe = ' ',nombre_contacto = ' ', email_contacto = ' ', cantidad_quipos = 0,  fecha_compra = ' ',  fecha_venta = ' ', observacion = ' ' ){

      this._id = _id;
      this.nombre = nombre;
      this.serial = serial;
      this.marca = marca;
      this.modelo = modelo;
      this.registro_invima = registro_invima;
      this.vencimiento_invima = vencimiento_invima;
      this.proveedor = proveedor;
      this.pais_fabricacion = pais_fabricacion;
      this.garantia = garantia;
      this.quien_recibe = quien_recibe;
      this.nombre_contacto = nombre_contacto;
      this.email_contacto = email_contacto;
      this.cantidad_quipos = cantidad_quipos;
      this.fecha_compra = fecha_compra;
      this.fecha_venta = fecha_venta;
      this.observacion = observacion;
    }

    _id: String;
    nombre: String;
    serial: String;
    marca: String;
    modelo: String;
    registro_invima: String;
    vencimiento_invima: String;
    proveedor: String;
    pais_fabricacion: String;
    garantia: String;
    quien_recibe: String;
    nombre_contacto: String;
    email_contacto: String;
    cantidad_quipos: Number;
    fecha_compra : String;
    fecha_venta : String;
    observacion: String;

}
