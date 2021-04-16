import { Component, OnInit } from '@angular/core';
import {Equipo} from '../../_models'
import { EquipoService } from './../../_services';

declare let  M: any; //Mostrar mensaje usuando materialize


@Component({
  selector: 'app-stock-equipos',
  templateUrl: './stock-equipos.component.html',
  styleUrls: ['./stock-equipos.component.css'],
  providers:[EquipoService]
})
export class StockEquiposComponent implements OnInit {

  equipos : Equipo[];

  displayedColumns: string[] = ['posicion', 'nombre', 'serial', 'marca', 'modelo', 'cant_disponible'];

  constructor(private _equipoService : EquipoService) {
    this.equipos = [];
   }

  ngOnInit(): void {

    //dataSource = equipos;

    this._equipoService.getEquipos()
    .subscribe(
        res => {
          this.equipos = res as Equipo[];
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


      console.log("Equipos en el backend");
      console.log(this.equipos);

  }

}
