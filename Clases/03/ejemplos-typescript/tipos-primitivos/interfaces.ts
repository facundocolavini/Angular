//----------- Interface (Interfaz)-----------
// Una interfaz no se puede instancias (no se puede crear un objeto de una interfaz)
/* 
La interfaz no puede tener metodos 
en la interfaz los metodos solo se pueden definir los nombres de los metodos
*/
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal: string;
    metodo: () => void;
}

// Definicion de una interfaz
/* La interface la puede crear en otro archivo donde se crean todas las interfaces (para que sea más ordenado)
 */
class P1  implements Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal: string;
    metodo: () => void = () => {
        console.log('Metodo');
    }
}


//Otro ejemplo 
//interfaz como tipo
interface persona {
	nombre: string;
	edad: number;
	nacimiento: Date;
	aficiones: string[]; //array de aficiones
	casado?: boolean; //? Indica que no es obligatorio
}

let jose: persona; //variable con el nuevo tipo


interface sumergibleInterface {
    tiempoMaxBajoElAgua: number;
    profundidadMaxima: number;
  
    repelerAgua(): void;
  }
  class relojSumergible implements sumergibleInterface {
    tiempoMaxBajoElAgua = 1;
    profundidadMaxima = 10;
    repelerAgua() { console.log('El agua me resbala');}