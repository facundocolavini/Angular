import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../modelos/Modelos';
import { PruebaObservablesService } from '../prueba-observables.service';

@Component({
  selector: 'app-prueba-observables',
  templateUrl: './prueba-observables.component.html',
  styleUrls: ['./prueba-observables.component.css']
})
export class PruebaObservablesComponent implements OnInit {

  public fecha: Date;
  //public peliculas: Pelicula[];

  constructor(
    public pOS: PruebaObservablesService
  ) { }

  ngOnInit(): void {
    //this.pOS.getStarWarsMoviesP().then(response => response.json()).then(response => console.log(response.results));
    /*this.pOS.ejemploObservable().subscribe({
      next: (fecha: Date) => {
        console.log('Componente 1');
        console.log(fecha);
        this.fecha = fecha;
      },
      error: (error) => console.error(error),
      complete: () => console.log('Acabo')
    });*/
    /*this.pOS.peliculas$.pipe().subscribe(response => {
      this.peliculas = response;
    });*/
  }
  
  
}
