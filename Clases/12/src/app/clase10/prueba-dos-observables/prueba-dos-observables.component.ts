import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription, tap } from 'rxjs';
import { Pelicula } from '../modelos/Modelos';
import { PruebaObservablesService } from '../prueba-observables.service';

@Component({
  selector: 'app-prueba-dos-observables',
  templateUrl: './prueba-dos-observables.component.html',
  styleUrls: ['./prueba-dos-observables.component.css']
})
export class PruebaDosObservablesComponent implements OnInit, OnDestroy {

  public fecha: Date;
  public peliculas: Pelicula[];
  private suscripcion: Subscription;

  constructor(
    private pOS: PruebaObservablesService
  ) { }

  ngOnInit(): void {
    this.suscripcion = this.pOS.peliculas$
      .pipe(
        tap(peliculas => console.log(peliculas)),
        map(peliculas => {
          return peliculas.filter(pelicula => pelicula.episode_id < 4)
        }),
        tap(peliculas => console.log(peliculas))
      )
      .subscribe(response => {
        this.peliculas = response;
      });
    /*this.pOS.ejemploObservable().subscribe({
      next: (fecha: Date) => {
        console.log('Componente 2');
        console.log(fecha);
        this.fecha = fecha;
      },
      error: (error) => console.error(error),
      complete: () => console.log('Acabo')
    });*/
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

}
