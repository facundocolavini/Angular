class Alumno {
    nombre : string;
    edad : number;
    id: number;
    // metodo constructor
    constructor(nombre: string, edad: number, id: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.id = id;
    }
}

// Lista de tipo Alumno
let alumnos: Alumno[];
let alumno1 = new Alumno("Juan", 30, 1);
alumno1.nombre;


class Persona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
    this.edad = edad;
    }
    imprimir() { console.log(`Nombre:${this.nombre}`);
    let jose: Persona = new Persona('Jose', 30);
    jose.imprimir();
    }
}