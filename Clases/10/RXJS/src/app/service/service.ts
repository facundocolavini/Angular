
import { BehaviorSubject, interval, map, Observable, take } from 'rxjs';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Peliculas } from 'src/app/modelos/peliculas';
import { Injectable } from '@angular/core';


 @Injectable({
    providedIn: 'root',
})
 export class ServiceComponent   {
  public peliculas$: Observable<Peliculas[]>;
  private peliculas: BehaviorSubject<any>;

  constructor(private httpClient: HttpClient) {
    this.peliculas = new BehaviorSubject([null]),
    this. peliculas$ = this.peliculas.asObservable();
    this.httpClient.get('https://swapi.dev/api/films').subscribe
    (response => {this.peliculas.next((response as any).results)})
  }

  ngOnInit(): void {
  }


  modificarPeliculas(){
   /*  this.peliculas.next([{nombre:'Mi pelicula'}]) */
  }
  // Promises
  public getPromises(): Promise<Response>{
    return fetch('https://swapi.dev/api/films');
  }
  //Observable subscripcion se ejecuta cuando emitamos un nuevo valor
  public getObservable(): Observable<any>{
    return this.httpClient.get('https://swapi.dev/api/films');
  }

  public ejemploObservable(): Observable<any>{
    return interval(1000).pipe(take(5),map(_ => new Date()))
  }
}
