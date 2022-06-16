import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'app-generado-a-mano',
    templateUrl: './generado-a-mano.component.html',
    styleUrls: ['./generado-a-mano.component.css']
  })

  // Clase que se encarga de generar el componente
  // El nombre de la clase no tiene que coincidir con el nombre del archivo
  
  // Ciclo de vida del componente 
  // ngOnInit(): void {
  export class  GeneradoAManoComponent implements OnInit , OnDestroy {
    constructor() { }

    ngOnInit(): void {}

    ngOnDestroy(): void {}
  }
