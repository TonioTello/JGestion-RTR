import { Component, OnInit, Inject, Input } from '@angular/core';
import {Servicio} from '../../_models'

import { ServicioService } from './../../_services';

import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

declare let  M: any; //Mostrar mensaje usuando materialize

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
  servicioSelected : Servicio;


  displayedColumns: string[] = ['posicion', 'numeroOrden', 'cliente', 'equipo', 'quienNotifica', 'telefono', 'quienEjecuta', 'estado', 'reporte'];

  constructor(private _servicioService : ServicioService, public dialog: MatDialog) {
    this.servicios = [];
    this.servicioSelected = new Servicio();
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

  openDialog(servicio:any): void {

    console.log("Datos enviados al pop pup");
    console.log(servicio);

    this.servicioSelected = servicio;

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: this.servicioSelected
    });

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
  providers:[ServicioService]
})
export class DialogOverviewExampleDialog {

  servicio : Servicio;

  constructor(
    private _servicioService : ServicioService,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Servicio
  ) {
    this.servicio = new Servicio();
  }

  ngOnInit(): void {
    console.log("Dentro del pop up");
    console.log(this.data);
    this.servicio = this.data;
  }

  onGuardar(){
    console.log("Click en onGuardar - Resporte del servicio")
    console.log (this.servicio)

    // this.servicio._id = this.data._id;
    // this.servicio.estado = "Prueba Pop up 2";

    this._servicioService.updateServicio(this.servicio)
    .subscribe(
      res=> {
      M.toast({html: 'Reporte de servicio actualizado...'});
      this.servicio = new Servicio();  //limpiar el formulario

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
    this.dialogRef.close();

  }

  onCancelar(){
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

/*   constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  } */

}
