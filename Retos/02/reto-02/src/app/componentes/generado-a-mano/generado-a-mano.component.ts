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
    
    /* Variable */
   
    /* Object */
    public alumno = {
      nombre: 'Facundo',
      apellidos: 'Colavini'
    };
    color: string = 'red';
    public frutas = ['Banana', 'Pera', 'Manzana'];

    objFrutas = [
      {nombre: 'Banana'},{nombre: 'Pera'},{nombre: 'Manzana'}
    ]
    
    nombre: string = '';
    apellido: string = '';
    public mostrar = true;
    valorSwitch = 'valor1';
    
    hoy = new Date();

    constructor() { }

    ngOnInit(): void {}

    ngOnDestroy(): void {}
    
    ejemplo(variable: string) {
     return 'Funcion';
    }

    ejemploClick () {
      alert('Le diste click');
    }
    verDatos() {
      console.log('Nombre: ', this.nombre);
      console.log("Apellido: ", this.apellido)
    }
    cargarDatos() {
      this.nombre = "Lionel"
      this.apellido = "Messi"
    }
   
  }
