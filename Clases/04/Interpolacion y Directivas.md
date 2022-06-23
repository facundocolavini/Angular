# Interpolacion y directivas

# Interpolacion y expresiones

Una de las caracteristicas fundamentales de Angular es separar la vista del modelo de datos.
En el modelo de datos tenemos las variables y en la vista implementamos como se muestran dichos datos.

Esto quiere deci que las variables que tengamos declaradas a nivel global en el componente puede sere utilizada en la vista ya sea para mostrarlas directamente como para operar con ellas.

Interpolacion
Si no se especifica sera publica la variable.
{{nombre}}
concatenado  
{{nombre + " " + apellido}}

- No se puede hacer instancias new Algo()

Es como una espcecie de componente pero es la clase y esa clase hace cosas sobre el HTML
manipulan otros HTML. Pero no tienen html propio.

Directivas :

Del lado izquierdo ponemos la directiva que queremos utilizar encerrada entre corchetes [...]

Del lado derecho, ubicamos el parámetro que estará procesando.

La sintaxis de estas directivas es la siguiente:
[directiva]=”...“

NgClass

Permite asignar dinamicamente la clase CSS a un elemento HTML. En este ejemplo podemos ver que de acuerdo con la propiedad del componente asociado a la vista llamada hayError de tipo boolean (tue|false) se asignara la calase css erro o succes al

<div [ngClass]="hayError" ? 'error' : 'success'">Resultado obtenido</div>

NgStule

Permite asignar dinamicamente un estilo especifico a un elemento HTML. Podemos ver que el estilo font-size del div se va asignar de acuerdo con la propiedad del componente llaada size del tipo boolean (tue|false).

<div [style.font-size]="size ? 'x-large' : 'smaller'">
   Mensaje en letra grande o pequeña
</div>

Directivas Personalizadas

Puede ocurrir que todas las directivas ofrecidas por Angular no se adapten a lo que necesitamos resolver. Para estos casos, podremos desarrollar nuestras propias directivas 😍.
Crear una directiva es muy similar a la creación de un componente, solo que el decorador utilizado será @Directive.

Asi se crea una directiva con el siguiente comando:

```
  ng g d directivas/mi-directiva

```

Directivas Estructurales

Son aquellas que permiten generar código HTML a partir de un conjunto de valores 😎. Para referirnos a este tipo de directivas, siempre tenemos que anteponer un \* (asterisco).

```

```

NgFor
Se utiliza para iterar sobre colecciones de objetos. Aquí, por ejemplo, se muestran todas las frutas del arreglo declarado en línea:

<ul>
   <li *ngFor="let fruta of ['Banana', 'Pera', 'Naranja']">
       {{fruta}}
   </li>
</ul>

NgIf

Sirve para mostrar u ocultar el elemento HTML que la SE referencie junto con sus elementos hijos. Vemos que el <div> y su contenido se mostrarán según el valor de la propiedad mostrarDiv de tipo boolean del componente asociado a la vista 👇

<div *ngIf="mostrarDiv">
   <span>Este texto se mostrará de acuerdo al valor de mostrarDiv</span>
   <p>
       <span>Este texto también se mostrará de acuerdo al valor de mostrarDiv</span>
   </p>
</div>

NgElse

NgSwitch
Esta directiva es similar a la sentencia switch de JavaScript, pero el
resultado dependerá del valor que tenga la propiedad valorSwitch del componente asociado a la vista.

<div [ngSwitch]="valorSwitch">
   <span *ngSwitchCase="'valor1'">Valor 1</span>
   <span *ngSwitchCase="'valor2'">Valor 2</span>
   <span *ngSwitchCase="'valor3'">Valor 3</span>
</div>

## Binding

Cada componente contiene la lógica de la porción de la página que representa y, además, tiene asociada la vista HTML 📝.
El proceso de vincular o comunicar un componente (class) con la vista HTML se llama binding.

Los elementos que nos ofrece Angular son:
template expression.
template statements.
property binding.

TEMPLATE EXPRESSION
Nos permiten reemplazar en tiempo de ejecución una referencia dentro del HTML con un valor de una propiedad del componente que se llama interpolación 🎯. La forma más simple de implementar la técnica de binding en Angular es con la interpolación.

TEMPLATE EXPRESSION

Mediante la inserción del nombre de una propiedad de un componente
{{ propiedad }} dentro de la vista, así podremos embeber un string que se actualizará dinámicamente según el valor que va tomando la propiedad.

```js
import { Component, OnInit } from "@angular/core";
@Component({
 selector: 'app.interpolacion',
 templateUrl: './interpolacion.component.html',
 styleUrls: './interpolacion.component.css'
})
export class interpolacionComponent implements OnInit {
 public valor: string = 'Prueba de Interpolacion';
 constructor() {}
 ngOnInit() {}


<h2>Ejemplo de interpolación</h2>
<h3>{{ valor }}</h3>
```

Si observamos el código del componente, notaremos que está formado por una clase class y su decorador @Component. Estas dos palabras reservadas de TypeScript serán suficientes y necesarias para definir un componente🙌.
Dicho componente cuenta con una propiedad de tipo string llamada valor. Por el lado de la vista, vemos el código HTML estándar al cual se le agregan las dobles llaves {{ valor }} para indicar la interpolación y leer la propiedad.

TEMPLATE STATEMENTS
Permiten relacionar un evento generado por nuestra vista, con una función de nuestro componente. Al igual que template expressions, se inserta en la vista HTML y va asociado a un tag HTML (Puciarelli, 2020, p.27). La sintaxis es la siguiente:
<tag ...(origenEvento)=”template_statement()” ...>

<button (click)=”guardarCambios()”>Guardar</button>

En este caso podemos ver la relación creada entre el evento clic del botón con la función guardarCambios del componente la cual sería nuestro template statement 😉.

# Property binding

Permite relacionar una propiedad de un objeto del DOM (Document Object Model) con nuestro componente. Esta relación puede ser en un solo sentido (one-way) o en ambos (two-way).

One-way

La relación en una dirección será desde una propiedad de nuestro componente, a una propiedad de un objeto del DOM

two-way

Se utilizan para compartir datos entre el componente y su vista, y para actualizar el modelo a medida que interactuamos con la vista.

Componente

El ejemplo anterior contiene dos propiedades nombre y apellido que luego serán utilizadas para comunicarse con la vista. También están las funciones verDatos y cargarDatos

vista
Los <input> con id nombre y apellido están vinculados a las propiedades nombre y apellido respectivamente, mediante la notación [(...)]

# PIPES

Son pequeñas funciones separadas a un componente que te servirá en cualquier parte de la web.
Las vamos a utilizar en 1 o varios componentes para no programar varias veces la misma función o crear un componente solo para esto una tarea (Flores, 2018).

Además de invocar a la función guardarForm, le estamos pasando como parámetro los datos del formulario mediante la variable de tipo Template reference llamada formDatos:

```js
birthday = new Date(1988, 3, 15);
```

```html
<p>Mi cumpleaño es el {{ birthday | date }}</p>
```
