import { Injectable } from '@angular/core';

interface Alumno {
  nombre: string;
  edad: number;
  calificacion: number;
}

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  public datos: Alumno[] = [
    {nombre: 'Juan', edad: 20, calificacion: 100},
    {nombre: 'Jose', edad: 25, calificacion: 80},
  ]

  constructor() { }

  public sayHi() {
    alert('Hi!!');
  }

  modificar() {
    this.datos = [
      {nombre: 'Francisco', edad: 20, calificacion: 60}
    ]
  }

}
