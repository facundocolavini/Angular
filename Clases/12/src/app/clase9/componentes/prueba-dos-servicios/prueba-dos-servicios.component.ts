import { Component, OnInit } from '@angular/core';
import { ClaseDatos } from '../../clases/clase-datos';
import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-prueba-dos-servicios',
  templateUrl: './prueba-dos-servicios.component.html',
  styleUrls: ['./prueba-dos-servicios.component.css']
})
export class PruebaDosServiciosComponent implements OnInit {

  public datos: ClaseDatos = new ClaseDatos();

  constructor(
    public miServicio: DatosService
  ) { }

  ngOnInit(): void {
    console.log(this.miServicio.datos);
  }

  click() {
    console.log(this.miServicio.datos);
  }

}
