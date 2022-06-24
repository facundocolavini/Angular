import { Component, inject, OnInit } from '@angular/core';
import { IntHeroe } from 'src/app/components/int-heroe';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  nombre: string = '';
  heroe: IntHeroe = {
    nombre: 'spider-man',
  }
  
  constructor() { }

  ngOnInit(): void {
  
  }

}
