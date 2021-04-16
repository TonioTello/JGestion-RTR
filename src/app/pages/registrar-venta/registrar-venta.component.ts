import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Equipo} from '../../_models'
import {Cliente} from '../../_models'
import {Venta} from '../../_models'

import { EquipoService } from './../../_services';
import { ClienteService } from './../../_services';
import { VentaService } from './../../_services';

declare let  M: any; //Mostrar mensaje usuando materialize

@Component({
  selector: 'app-registrar-venta',
  templateUrl: './registrar-venta.component.html',
  styleUrls: ['./registrar-venta.component.css'],
  providers:[ClienteService, EquipoService, VentaService]
})
export class RegistrarVentaComponent implements OnInit {

  @Output() goHomeEvent = new EventEmitter<string>();

  equipo : Equipo;
  cliente : Cliente;
  venta : Venta;
  clientes : Cliente[];

  cliente_searched : Cliente;
  cliente_found : Cliente;
  equipo_searched : Equipo;
  equipo_found : Equipo;

  clienteExiste = false;
  equipoExiste = false;

  constructor(private _clienteService : ClienteService, private _equipoService : EquipoService, private _ventaService : VentaService ) {
    this.equipo = new Equipo();
    this.cliente = new Cliente();
    this.venta = new Venta();
    this.cliente_searched = new Cliente();
    this.cliente_found = new Cliente();
    this.equipo_searched = new Equipo();
    this.equipo_found = new Equipo();
    this.clientes = [];

   }


  ngOnInit(): void {
  }

  onConsultarCliente(){

    console.log("CLick en onConsultarCliente")

    this.cliente_found = new Cliente();
    this._clienteService.searchCliente(this.cliente_searched)
    .subscribe(
        res => {
          this.cliente_found = res as Cliente;
          M.toast({html: "Cliente Existente"});
          this.clienteExiste = true;
          console.log(res);
        },
        error=>{
          M.toast({html: error.error.message});
          console.log(error.error.message);

        }
      );
  }

  onConsultarEquipo(){

    console.log("CLick en onConsultarEquipo")

    this.equipo_found = new Equipo();
    this._equipoService.searchEquipo(this.equipo_searched)
    .subscribe(
        res => {
          this.equipo_found = res as Equipo;
          M.toast({html: "Equipo Existente"});
          this.equipoExiste = true;
          console.log(res);
        },
        error=>{
          M.toast({html: error.error.message});
          console.log(error.error.message);
        }
      );
  }


  onGuardar(){
    console.log("CLick en onGuardar")
    this.venta.nombreCliente = this.cliente_found.empresa;
    this.venta.nitCliente = this.cliente_found.nit;
    this.venta.nombreEquipo = this.equipo_found.nombre;
    this.venta.numeroSerie = this.equipo_found.serial;

    console.log(this.venta)

    this._ventaService.register(this.venta)
    .subscribe(
      res=> {
      M.toast({html: 'Venta registrado...'});

      this.venta = new Venta();  //limpiar el formulario
      this.cliente_found = new Cliente();  //limpiar el formulario
      this.equipo_found = new Equipo();  //limpiar el formulario
    },
    error =>{

      let errorMessageReg = <any>error;

/*       if(errorMessageReg != null){
        this.errorMessageReg = error.error.message;
        console.log(error.error.message);
      } */
      console.log(error.error.message);
    }
    );

  }

  onCancelar(){
    let selectedTabview = "0";
    this.goHomeEvent.emit(selectedTabview);
  }

}
