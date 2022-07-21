import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EjemploModalComponent } from '../ejemplo-modal/ejemplo-modal.component';

@Component({
  selector: 'app-material-ejemplos',
  templateUrl: './material-ejemplos.component.html',
  styleUrls: ['./material-ejemplos.component.css']
})
export class MaterialEjemplosComponent implements OnInit {

  public resultadoModal: string;
  public displayedColumns: string[] = ['nombre', 'edad', 'fechaIngreso', 'calificacion'];
  public datosTabla = [
    {nombre: 'Juan', edad: 15, fechaIngreso: '04/05/2022', calificacion: 100},
    {nombre: 'Pedro', edad: 18, fechaIngreso: '04/04/2022', calificacion: 80},
    {nombre: 'Miguel', edad: 19, fechaIngreso: '10/05/2022', calificacion: 70},
    {nombre: 'Francisco', edad: 25, fechaIngreso: '06/05/2022', calificacion: 95},
    {nombre: 'Jose', edad: 20, fechaIngreso: '07/05/2022', calificacion: 75}
  ]

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public openDialog() {
    const dialogRef = this.dialog.open(
      EjemploModalComponent,
      {
        width: '250px',
        data: 'Esto es un modal',
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.resultadoModal = result;
    });
  }

}
