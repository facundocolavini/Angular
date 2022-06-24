import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  hoy = new Date();

  alumnos = [
    {name: 'Facundo', lastName: 'Colavini', birdthday: new Date(1995,2,23) },
    {name: 'Carlos' , lastName: 'Hernandez', birdthday:  new Date(2004,7,12) },
    {name: 'Pablo' , lastName: 'Gonzalez', birdthday: new Date(1996,4,2)}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
