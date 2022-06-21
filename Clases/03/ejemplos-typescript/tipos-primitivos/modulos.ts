// persona.ts
export function saludo(name: string){
    console.log(`Buenos dias ${name}!`);
  }
  export const nombreConstante: string = 'Jorge';
  export const numerico: number = 0;

// persona.ts
const edadDefault = 35;
export default edadDefault;

//Otra funcionalidad en Typescript es reexportar declaraciones:

//operador.ts
interface Operator {
    eval(x: number, y: number): number;
  }
  export default Operator;


//persona.ts
export interface persona {
	nombre: string;
	edad: number;
}
