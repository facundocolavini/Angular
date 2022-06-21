import {saludo, nombreConstante} from "./modulos";
saludo(nombreConstante);   // Hola Jorge!

import edadDefault from "./modulos";
console.log(edadDefault);  


  //suma.ts
  import Operator from "./modulos";
  export class Add implements Operator {
      eval(x: number, y: number): number {
          return x + y;
      }
  }


  //tratamientoPersona.ts
import { persona } from './modulos';
let alba: persona = {nombre: 'Alba', edad: 35};
