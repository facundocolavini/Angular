export class ClaseDatos {
    public datos = [
        { nombre: 'Juan', edad: 20, calificacion: 100 },
        { nombre: 'Jose', edad: 25, calificacion: 80 },
    ]

    constructor() { }

    public sayHi() {
        alert('Hi!!');
    }

    modificar() {
        this.datos = [
            { nombre: 'Francisco', edad: 20, calificacion: 60 }
        ]
    }
}