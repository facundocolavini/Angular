import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const textoFinal = value;
    switch (args[0]) {
      case '?':
        value = '¿' + value + '?'
        break;
      case '!':
          value = '¡' + value + '!'
          break;
    }
    switch (args[1]) {
      case 'upper':
        value = value.toUpperCase();
        break;
      case 'lower':
        value = value.toLowerCase();
        break;
    }
    return value;
  }

}
