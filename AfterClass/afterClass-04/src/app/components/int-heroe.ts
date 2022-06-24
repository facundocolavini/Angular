export interface IntHeroe {
    nombre: string,
    edad?:number,
}

export interface Mujer {
    nombre: string, 
    edad?:number,
    personaje: IntHeroe
}