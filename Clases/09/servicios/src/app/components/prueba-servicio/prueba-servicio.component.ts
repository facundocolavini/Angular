import { Component, OnInit } from '@angular/core';
import { ClaseDatos } from '../clases/clase-datos';

import { DatosService} from '../servicios/datos.service'

@Component({
  selector: 'app-prueba-servicio',
  templateUrl: './prueba-servicio.component.html',
  styleUrls: ['./prueba-servicio.component.css']
})
export class PruebaServicioComponent implements OnInit {
  public datos:ClaseDatos = new ClaseDatos();
  constructor(public miServicio: DatosService) { }

  ngOnInit(): void {
   //Llamamos a nuestro servicio
    console.log(this.miServicio.datos)
    console.log(this.datos.datos)
  }



 
}
