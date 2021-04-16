import { Component, OnInit } from '@angular/core';
import {Venta} from '../../_models'

import { VentaService } from './../../_services';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-historial-ventas',
  templateUrl: './historial-ventas.component.html',
  styleUrls: ['./historial-ventas.component.css'],
  providers:[VentaService]

})
export class HistorialVentasComponent implements OnInit {

  ventas : Venta[];

  displayedColumns: string[] = ['posicion', 'factura', 'cliente', 'nit', 'equipo', 'serial', 'fechaVenta', 'fechaInstalacion', 'responsableInst'];

  constructor(private _ventaService : VentaService ) {
    this.ventas = [];
  }
  ngOnInit(): void {

    //dataSource = clientes;

    this._ventaService.getVentas()
    .subscribe(
        res => {
          this.ventas = res as Venta[];
         // M.toast({html: 'Empleado Guardado Exitosamente...'});
          console.log(res);
        },
        error=>{
          console.log(error.error.message);

        }
      );

      console.log("Ventas en el backend");
      console.log(this.ventas);
  }

}
