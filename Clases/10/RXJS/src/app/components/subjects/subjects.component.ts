import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ServiceComponent } from 'src/app/service/service';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  public fecha = new Date();
  constructor(private serviceComponent: ServiceComponent) { }

  ngOnInit(): void {
    this.serviceComponent.peliculas$.subscribe(
      response => console.log(response,'Success Componente 2'))

    this.serviceComponent.ejemploObservable().subscribe({
      next:(fecha:Date) => {
        console.log('Componente 2!!')
        console.log(fecha)
        this.fecha = fecha;
      },
      error:(err) => console.log(err),
      complete: () => console.log('Acabo')
    })
  }



}
