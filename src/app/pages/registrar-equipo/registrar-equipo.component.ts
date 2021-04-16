import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Equipo} from '../../_models'

import { EquipoService } from './../../_services';

declare let  M: any; //Mostrar mensaje usuando materialize


@Component({
  selector: 'app-registrar-equipo',
  templateUrl: './registrar-equipo.component.html',
  styleUrls: ['./registrar-equipo.component.css'],
  providers:[EquipoService]
})
export class RegistrarEquipoComponent implements OnInit {

  @Output() goHomeEvent = new EventEmitter<string>();

  equipo : Equipo;

  constructor(private _equipoService : EquipoService) {
    this.equipo = new Equipo();
  }

  ngOnInit(): void {
  }

  onGuardar(){
    console.log("CLien en onGuardar - Informacion del equipo")
    console.log (this.equipo)

    this._equipoService.register(this.equipo)
    .subscribe(
      res=> {
      M.toast({html: 'Equipo registrado...'});

      //let identity = res;
      //this.identity = identity;

      //localStorage.setItem('identity', JSON.stringify(identity));
      this.equipo = new Equipo();  //limpiar el formulario
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
