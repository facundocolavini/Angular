import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
/* import { ModalComponent } from '../modal/modal.component'; */

@Component({
  selector: 'app-ejemplos-material',
  templateUrl: './ejemplos-material.component.html',
  styleUrls: ['./ejemplos-material.component.css']
})
export class EjemplosMaterialComponent implements OnInit {

/*   public resultadoModal: string; */
  public displayedColumns: string[] = ['nombre', 'edad', 'fechaIngreso', 'calificacion'];
  public datosTabla = [
  {nombre:'Juan',edad:15 ,fechaIngreso:'04/06/2022',calificacion:100},
  {nombre:'Pedro',edad:17,fechaIngreso:'01/06/2022',calificacion:90},
  {nombre:'Miguel',edad:18,fechaIngreso:'02/06/2022',calificacion:57},
  {nombre:'mATIAS',edad:19,fechaIngreso:'07/06/2022',calificacion:93},
]

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

/*   public openDialog(){
    const dialogRef = this.dialog.open(
      ModalComponent,{
        width:'250px',
        data: 'Esto es un modal'
      }
    );
  

    dialogRef.afterClosed().subscribe(result => {
      console.log('The modal was closed');
      this.resultadoModal = result;
    })
  } */
}
