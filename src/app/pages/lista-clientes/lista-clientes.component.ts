import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../_models'

import { ClienteService } from './../../_services';

declare let  M: any; //Mostrar mensaje usuando materialize

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
  providers:[ClienteService]
})
export class ListaClientesComponent implements OnInit {

  count = [];
  clientes : Cliente[];

  displayedColumns: string[] = ['posicion', 'nit', 'empresa', 'ciudad', 'representante', 'telefono'];

  constructor(private _clienteService : ClienteService) {
    this.clientes = [];
   }

  ngOnInit(): void {

    //dataSource = clientes;

    this._clienteService.getClientes()
    .subscribe(
        res => {
          this.clientes = res as Cliente[];
         // M.toast({html: 'Empleado Guardado Exitosamente...'});
          console.log(res);
        },
        error=>{
/*           let errorMessage = <any> error;
          if(errorMessage != null){
            this.errorMessage = error.error.message;
            console.log(error.error.message);
          } */

          console.log(error.error.message);

        }
      );



      console.log("Clientes en el backend");
      console.log(this.clientes);
  }


}
