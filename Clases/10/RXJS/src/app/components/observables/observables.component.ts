import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { ServiceComponent } from 'src/app/service/service';
@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  public fecha = new Date();
  constructor(public serviceComponent: ServiceComponent) { }

  ngOnInit(): void {
    console.log('Antes');
    // Promise 
    this.serviceComponent.getPromises().then(response => response.json()).then(response => console.log(response));
    console.log('Despues');

    // Observable
    this.serviceComponent.peliculas$.subscribe(
      response => console.log(response,'Success Componente'))
   /*  this.serviceComponent.getObservable().subscribe(
      response => console.log(response,'Success')
    ) */

    //newx  
    this.serviceComponent.ejemploObservable().subscribe({
      next:(fecha:Date) => {
        console.log('Componente 1!!')
        console.log(fecha)
        this.fecha = fecha;
      },
      error:(err) => console.log(err),
      complete: () => console.log('Acabo')
    })
  }

  modificarPeliculas(){
    this.serviceComponent.modificarPeliculas()
  }


}
