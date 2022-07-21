import { Component, OnInit } from '@angular/core';
import { ClaseDatos } from '../../clases/clase-datos';
import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-prueba-servicios',
  templateUrl: './prueba-servicios.component.html',
  styleUrls: ['./prueba-servicios.component.css']
})
export class PruebaServiciosComponent implements OnInit {

  public datos: ClaseDatos = new ClaseDatos();

  constructor(
    public miServicio: DatosService
  ) { }

  ngOnInit(): void {
    console.log(this.miServicio.datos);
    console.log(this.datos.datos);
  }

  click(index: number) {
    console.log('Usted clickeo a: ' + this.miServicio.datos[index].nombre);
  }

}
