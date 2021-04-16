import { Component, OnInit, Inject } from '@angular/core';
import {Servicio} from '../../_models'

import { ServicioService } from './../../_services';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css'],
  providers:[ServicioService]

})
export class CronogramaComponent implements OnInit {
  animal = "";
  name = "";

  servicios : Servicio[];

  displayedColumns: string[] = ['posicion', 'numeroOrden', 'cliente', 'equipo', 'quienNotifica', 'telefono', 'quienEjecuta', 'estado', 'reporte'];

  constructor(private _servicioService : ServicioService, public dialog: MatDialog) {
    this.servicios = [];
  }
  ngOnInit(): void {

    //dataSource = clientes;

    this._servicioService.getServicios()
    .subscribe(
        res => {
          this.servicios = res as Servicio[];
         // M.toast({html: 'Empleado Guardado Exitosamente...'});
          console.log(res);
        },
        error=>{
          console.log(error.error.message);

        }
      );

      console.log("Servicios en el backend");
      console.log(this.servicios);
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

/*     const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    }); */
  }

}


@Component({
  selector: 'crear-reporte-servicio.component.html',
  templateUrl: 'crear-reporte-servicio.component.html',
  styleUrls: ['./cronograma.component.css'],
})
export class DialogOverviewExampleDialog {

/*   constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  } */

}
