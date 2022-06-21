
//-----------TIPOS PRIMITIVOS-----------

// variables
let nombre: string = "Juan";
let edad: number = 30;
let fechaNacimiento: Date = new Date();
let casado: boolean = false;
const resultado = queTipoSoy<string>("Hola");


// Arrays
let habilidades: string[] = ['Bash','Counter', 'Healing'];
let pictures: Array<string>;
pictures = ['Sunset','Vacation', 'Landscape'] 


// Enum (Enumeración)
enum TipoDato {
    numero = 1,
    texto = "texto",

}

// Tuple (Tupla)
//Es un array de distintos tipos de datos

// Definicion de tupla 
let tupla: [number, string] = [1, "texto"];

//Acceder a una tupla 
console.log(tupla[0]); // 1
console.log(tupla[1]); // texto


//Void 
// No retorna ningun valor  (undefined)
function sayHi(): void {
    console.log("Hola mundo");
}

let unused: void = sayHi();
console.log(unused);// undefined

// Never (Never) 
// No retorna nada 
// Es un tipo de dato que nunca se puede generar

// Definicion de never

function error(mensaje: string): never {
    throw new Error(mensaje);
}

// Definicion de never
error("Error");


// tipos genericos
// Ese dato va a ser del tipo que nos pase al definir esa clase

function queTipoSoy<T>(argumento: T) {
    return argumento;
 }
 let soyString  = queTipoSoy('Hola Mundo');
 let soyNumbero = queTipoSoy( 100 );
 let soyArreglo = queTipoSoy( [1,2,3,4,5,6,7,8,9,10] );
 
 let soyExplicito = queTipoSoy<number>( 100 );
 
/* class TipoDato<T> {
    dato: T;
}

let variable: TipoDato<string>;
 */