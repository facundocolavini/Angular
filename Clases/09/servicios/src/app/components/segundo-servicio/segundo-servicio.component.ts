import { Component, OnInit } from '@angular/core';
import { ClaseDatos } from '../clases/clase-datos';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-segundo-servicio',
  templateUrl: './segundo-servicio.component.html',
  styleUrls: ['./segundo-servicio.component.css']
})
export class SegundoServicioComponent implements OnInit {
  public datos:ClaseDatos = new ClaseDatos();
  constructor(public miServicio: DatosService) { }

  ngOnInit(): void {
    console.log(this.miServicio.datos)
  }

  click(){
    console.log(this.miServicio.datos)
  }

/*   modificar (){
    this.datos = [
      {nombre: 'Juan',edad:23, calificacion:100},
    ]
  } */
}
