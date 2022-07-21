import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'app-generado-mano',
    templateUrl: './generado-mano.component.html',
    styleUrls: ['./generado-mano.component.css']
})
export class GeneradoManoComponent implements OnInit, OnDestroy {

    alumno = {
        nombre: 'Juan',
        edad: 16
    };
    color: string = 'red';
    frutas = [
        { nombre: 'Manzana' }, { nombre: 'Platano' }, { nombre: 'Pera' }
    ]
    mostrar = false;
    valorSwitch = 'valor1';

    nombre: string = '';
    apellido: string = '';

    hoy = new Date();

    constructor() { }

    ngOnDestroy(): void {
    }

    ngOnInit(): void {
    }

    ejemplo(variable: string) {
        return 'Funcion!!!';
    }

    ejemploClick() {
        this.frutas = [
            { nombre: 'Pepino' }, { nombre: 'Sandia' }, { nombre: 'Pera' }
        ]
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