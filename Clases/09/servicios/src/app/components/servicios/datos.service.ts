import { Injectable } from '@angular/core';

interface Alumno {
  nombre: string;
  edad: number;
  calificacion:number;
}
@Injectable({
  providedIn: 'root'
})
export class DatosService {//Como es el unico servicio se comparte en componentes
  //Unica instancia
  public datos:Alumno[] = [
    {nombre: 'Juan',edad:23, calificacion:100},
    {nombre: 'Carlos',edad:35, calificacion:26},
  ]
  constructor() { }
  modificar (){
    this.datos = [
      {nombre: 'Juan',edad:23, calificacion:100},
    ]
  }
}
