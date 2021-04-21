import { Component, OnInit } from '@angular/core';
import {Venta} from '../../_models'

import { VentaService } from './../../_services';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

let d: Date;

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

        let i = 0;
          this.ventas.forEach(element => {
            let fecha1 = element.fechaVenta;
            let fecha2 = element.fechaInstalacion;
            this.ventas[i].fechaVenta = fecha1.substr(0, fecha1.indexOf("T") );
            this.ventas[i].fechaInstalacion = fecha2.substr(0, fecha2.indexOf("T") );
            i++;
          });

        },
        error=>{
          console.log(error.error.message);

        }
      );

  }

}
