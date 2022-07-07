# Directivas y pipes personalizados

## Pipes personlaizados

Además de los pipes mencionados anteriormente, Angular nos permite crear pipes que no tengamos en la librería por defecto.
Para generar un pipe ejecutamos el siguiente comando

ng generate pipe conversor

Una vez generado vamos a hacer que, luego de ser invocado, modifique el contenido del texto añadiendo la palabra “pipe”. El método transform es el encargado de hacer la funcionalidad.

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: conversor,
})
export class ConversorPipe implements PipeTransform {
  transform(name: string): string {
    return `Pipe ${name}`;
  }
}
```

PipeTransform : es una interfaz que nos obliga a usar el metodo transform.
Un pipe es como un metodo que aplicamos

## Pipes con argumentos

Una de las funcionalidades que traen los pipes es la posibilidad de recibir argumentos para realizar una operativa concreta 💪.
En el caso de los pipes personalizados también está permitido recibir argumentos 🚀.

```ts
 transform(name: string, args?: any): string {
    let palabra: string = 'pipe';
    switch (args) {
      case 'custom':
        palabra = 'custom';
        break;
      case 'curso':
        palabra = 'curso';
        break;
      }
      return `${palabra}: ${name}`;
  }

```

Para permitir recibir argumentos modificaremos el método transform de nuestro pipe.
Añadimos un segundo parámetro de entrar args (? porque es opcional) que contendrá el argumento que recibe 🙌.

Para comprobar el funcionamiento podemos ejecutar nuestro pipe en el html de la página. En nuestro caso, nos permitirá añadir la palabra “pipe”, “custom” o “curso”, siendo “pipe” la palabra por defecto:

```html
<p class="format-paragraph">
  {{ ‘Este texto va a ser transformado por el pipe’ | conversor }}
</p>

<p class="format-paragraph">
  {{ ‘Este texto va a ser transformado por el pipe’ | conversor:’cursom’ }}
</p>

<p class="format-paragraph">
  {{ ‘Este texto va a ser transformado por el pipe’ | conversor:’curso’ }}
</p>
```

## Directivas Personalizadas

Al igual que con los pipes, Angular nos permite la posibilidad de crear nuestras propias directivas 🙌. Esto nos va a permitir cambiar el comportamiento o la apariencia de un elemento HTML en base a una lógica. Para crear una directiva ejecutamos el siguiente comando:

ng generate directive resaltado

Para poder utilizar la directiva es necesario importarla en nuestro módulo correspondiente (en este caso app.module.ts). Una vez creada abrimos resaltado.directive.ts 👇

Un componentes tiene su html y css con las directivas no existe eso solo existe el ts y el elemento al que se le aplico la directiva se adhiere en otra etiqueta html .

```ts
import { Directive } from '@angular/core';

@Directive({
  selector: '[appResaltado]', //nombre directiva
})
export class ResaltadoDirective {
  constructor() {}
}
```

En el constructor de la directiva vamos a recoger el elemento HTML que invoca la directiva y añadimos el comportamiento (por ejemplo, resaltar en color amarillo). Para recoger el elemento utilizamos la inyección de ElementRef que importamos previamente 😉

```ts
import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective {
  constructor(private elemento: ElementRef) {
    elemento.nativeElement.style.backgroundColor = 'yellow';
  }
}
```

Una vez desarrollada la directiva tenemos que añadirla a nuestro html para probar su funcionamiento. Para ello, añadimos el selector definido a nuestra vista 👁‍🗨:

```html
<h3>Datos generales.</h3>
<p>Este texto está<span appResaltado>resaltado</span></p>
```

## Directivas Personalizadas

De igual modo que ocurre con los pipes, las directivas personalizadas también permiten recibir argumentos que modifiquen el comportamiento interno 😄.
En este caso, para pasarlo es necesario utilizar el término visto anteriormente: binding 🚀

Cómo lo hacemos? 🤔
Vamos a un ejemplo y editaremos la directiva para permitir que reciba como párametro el color de resaltado que queremos (sino recibe ninguno será amarillo).

## Directivas Estructurales

Al igual que las directivas de atributo personalizadas, en Angular podemos crear nuestras propias directivas estructurales a parte de las internas de framework: *ngFor, *ngIf, *ngSwitchCase y *ngSwitchDefault.
Recordemos que las directivas estructurales tienen por objetivo añadir, manipular o eliminar elementos del DOM (Document Object Model)

import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

```ts
@Directive({
  selector: '[appRepetir]',
})
export class RepetirDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appRepetir(numero: number) {
    for (var i = 0; i < numero; i++)
      this.viewContainer.createEmbeddedView(this.templateRef);
  }
}
```

La diferencia con las directivas de atributo es que se inyectan al constructor dos objetos, uno de tipo TemplateRef<any> y otro de ViewContainerRef:

```ts
constructor(private templateRef: TemplateRef<any>,
private viewContainer: ViewContainerRef) { }
```

Definimos un setter (método que define un valor a una propiedad) para capturar el valor que recibe la directiva👇

```ts
 @Input() set appRepetir(numero: number) {
    for (var i = 0; i < numero; i++)
      this.viewContainer.createEmbeddedView(this.templateRef);
  }

```

El atributo 'this.templateRef' tiene la referencia a la etiqueta HTML (en este caso 'span') que le aplicamos la directiva, por ejemplo:

```ts
<span *appRepetir="5">x</span>

```

Disponemos un 'for' que se repita la cantidad de veces asignada a la directiva:

```ts
for (var i = 0; i < numero; i++)

```

Dentro del for mediante el objeto 'this.viewContainer' procedemos mediante el método 'createEmbeddedView' a insertar la referencia de la etiqueta HTML (por ejemplo un 'span'):

```ts
this.viewContainer.createEmbeddedView(this.templateRef);
```
