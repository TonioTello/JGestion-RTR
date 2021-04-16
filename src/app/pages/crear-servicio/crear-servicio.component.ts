import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Equipo} from '../../_models'
import {Cliente} from '../../_models'
import {Servicio} from '../../_models'


import { EquipoService } from './../../_services';
import { ClienteService } from './../../_services';
import { ServicioService } from './../../_services';

declare let  M: any; //Mostrar mensaje usuando materialize

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.css'],
  providers:[ClienteService, EquipoService, ServicioService]
})
export class CrearServicioComponent implements OnInit {

  @Output() goHomeEvent = new EventEmitter<string>();

  equipo : Equipo;
  cliente : Cliente;
  servicio : Servicio;
  clientes : Cliente[];

  cliente_searched : Cliente;
  cliente_found : Cliente;
  equipo_searched : Equipo;
  equipo_found : Equipo;

  clienteExiste = false;
  equipoExiste = false;


  selected = 'Mantenimiento preventivo';
  constructor(private _clienteService : ClienteService, private _equipoService : EquipoService, private _servicioService : ServicioService) {
    this.equipo = new Equipo();
    this.cliente = new Cliente();
    this.servicio = new Servicio();
    this.cliente_searched = new Cliente();
    this.cliente_found = new Cliente();
    this.equipo_searched = new Equipo();
    this.equipo_found = new Equipo();
    this.clientes = [];

   }

  ngOnInit(): void {
  //  this.clienteExiste = true;
  }


  onConsultarCliente(){
    this.cliente_found = new Cliente();
    this._clienteService.searchCliente(this.cliente_searched)
    .subscribe(
        res => {
          this.cliente_found = res as Cliente;
          this.servicio.cliente = this.cliente_found.empresa;
          M.toast({html: "Cliente Existente"});
          this.clienteExiste = true;
          console.log(res);
        },
        error=>{
          M.toast({html: error.error.message});
/*           let errorMessage = <any> error;
          if(errorMessage != null){
            this.errorMessage = error.error.message;
            console.log(error.error.message);
          } */

          console.log(error.error.message);

        }
      );
  }

  onConsultarEquipo(){
    this.equipo_found = new Equipo();
    this._equipoService.searchEquipo(this.equipo_searched)
    .subscribe(
        res => {
          this.equipo_found = res as Equipo;
          this.servicio.equipo = this.equipo_found.nombre;
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
    console.log("Click en onGuardar - Informacion del servicio")
    console.log (this.servicio)

    this._servicioService.register(this.servicio)
    .subscribe(
      res=> {
      M.toast({html: 'Servicio registrado...'});

      this.servicio = new Servicio();  //limpiar el formulario
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
