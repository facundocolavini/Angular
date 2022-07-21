import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Alumno {
  nombre: string;
  fechaNacimiento: Date;
  calificacion: number;
}

@Injectable({
  providedIn: 'root'
})
export class DatosAlumnosService {

  constructor() { }

  obtenerInformacionAlumnos(): Observable<Alumno[]> {
    return of([
      { nombre: 'Juan', fechaNacimiento: new Date('10/05/1996'), calificacion: 8},
      { nombre: 'Pedro', fechaNacimiento: new Date('04/04/1996'), calificacion: 9},
      { nombre: 'Fernando', fechaNacimiento: new Date('01/02/1996'), calificacion: 7}
    ]);
  }

}
