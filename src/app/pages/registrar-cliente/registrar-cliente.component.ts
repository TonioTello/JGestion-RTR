import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Cliente} from '../../_models'

import { ClienteService } from './../../_services';

declare let  M: any; //Mostrar mensaje usuando materialize


@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css'],
  providers:[ClienteService]
})
export class RegistrarClienteComponent implements OnInit {

  @Output() goHomeEvent = new EventEmitter<string>();

  cliente : Cliente;

  constructor(private _clienteService : ClienteService) {
    this.cliente = new Cliente();

  }

  ngOnInit(): void {
    console.log(this._clienteService.signup());
  }

  onGuardar(){
    console.log("CLien en onGuardar")
    //console.log(this.cliente)

    this._clienteService.register(this.cliente)
    .subscribe(
      res=> {
      M.toast({html: 'Cliente registrado...'});

      //let identity = res;
      //this.identity = identity;

      //localStorage.setItem('identity', JSON.stringify(identity));
      this.cliente = new Cliente();  //limpiar el formulario
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
