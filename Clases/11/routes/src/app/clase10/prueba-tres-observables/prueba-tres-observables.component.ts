import { Component, OnInit } from '@angular/core';
import { PruebaObservablesService } from '../prueba-observables.service';

@Component({
  selector: 'app-prueba-tres-observables',
  templateUrl: './prueba-tres-observables.component.html',
  styleUrls: ['./prueba-tres-observables.component.css']
})
export class PruebaTresObservablesComponent implements OnInit {

  constructor(
    private pOS: PruebaObservablesService
  ) { }

  ngOnInit(): void {
  }

  modifcarPeliculas() {
    this.pOS.modificarPeliculas([
      {title: 'The Force Awakens', episode_id: 7},
      {title: 'The Last Jedi', episode_id: 8},
      {title: 'The Rise Of Skywalker', episode_id: 9}
    ]);
  }

}
