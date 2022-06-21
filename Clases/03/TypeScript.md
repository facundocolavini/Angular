## Que es Node.js

Es considerada una tecnologia de servidor que hace aportes a un proyecto javascript aunque sea con tecnologia front-end.

Node js es una implementacion en la cual javascript puede correr en el sistema operativo.
Uno de los requisitos que tenemos a la hora de configurar nuestras herramientas para el trabajo con Angular es la instalacion del Runtime de Node.js. Esto signifca que usaremos NodeJs pero utilizaremos una herramienta que viene consu instalacion: npm.

## Por que Node Js?

ANGULAR-CLI utiliza muchas configuraciones que depende internamente de node y npm que se emplean en el entorno de desarrollo y no se trasladan al proyecto compilado.

Un proyecto ANGULAR finalizado no se encuentra limitado a la plataforma de node para funcionar, sino que puede ahcerlo con cualquier servidor web que soporte html, css y javascript.

## Node nos aporta

- Las configuraciones (npm, entornos, etc)
- Test
  Preparacion de publicaciones (build final del proyecto)
- Creacion del proyecto (new project)

## Para crear un proyecto con NodeJs

Consiste en la creacion de un archivo package.json que e sun json y que se puede generar manualmente, pero npm nos ofrece la posigbilidad hacerlo mediante los siguientes comandos:

```
 npm init (Nos va preguntando por valores que se iran cargando en el archivo package.json)

 npm init --yes (responde que si a todas las preguntas que nos va haciendo la generacion del package.json)

```

## TypeScript

TypeScript es un lenguaje de programación de alto nivel, que permite a los desarrolladores escribir código de una manera más fácil, estructurada y legible.Creado por microsoft en el año 2012.

Se trata de un superseet de JavaScript que extiende su sintaxis.
Al compilar , se genera codigo JavaScript que es ya que el navegador no puede interpretar TypeScript.Este proceso se conoce como transpilar que significa generar un codigo en un lenguaje especifico a partir de otro.

## Ventajas de TypeScript

- Extiende a Superset de JavaScript.
- Ofrece tipado estricto y flexible.
- Mejora la legibilidad del código.
- Permite usar nuevas características.

## Usos de TypeScript

Es muy común encontrar ypescript del lado del FrontEnd.Pero tambien en el backend FrontEnd.

## Instalacion de TypeScript

Vamos a necesitar tener instaldo nodejs y un editor de codigo (visual studio code)
Visual Studio Code ya viene configurado para aprovechar al maximo TypeScript.

## Probando TypeScript

https://www.tutorialsteacher.com/typescript/typescript-tuple

Obsevemos un ejemplo de flujo de trabajo con typeScript:

```

    npm install -g typescript

    //Podemos crear un folder/carpeta y dentro un archivo .ts
    Touch index.ts

    // Dentro del index.ts se puede escribir un codigo typescrip valido
    npx tsc index.ts --outFile dist/index.js
    tsc index.ts --outFile dist/index.js

```

## Compilacion

```
 npx tsc index.ts

```

El proceso de compilacion parte de un archivo index.ts al cual se le ejecuta el comando de compilacion ts y obtenemos un archivo index.js.Esto es necesario para que el codigo pueda ser interpretado por el navegador o por el runtime de node.

```
npx tsc --watch index.ts
```

Sirve para observar cambios que se producen en el archivo index.ts.

## Tipos primitivos

- number (entero)
- string (cadena)
- boolean (booleano)
- array (arreglo)
- undefined (no definido)
- null (nulo)
- any (cualquier cosa)
- void (no tiene tipo)
- never (nunca)
- object (objeto)
- tuple (tupla)
- enum (enum)

## Tipos basicos

Typescript tiene la capacidad de trabajar con tipado de datos de dos formas:

- Explicito: Define una sintaxis para la creacion de variables con tipo de dato.
  Ejemplo:
  nombreVariable = Tipo de dato

Inderido puede deducir en funcion del valor
nombreVariable = Valor

## Variables

Una variable es un espacio reservado de memoria que utilizaremos para trabajar con datos en un programa, ya sea para guardar datos como para leer esos datos guardados 📂.

IMPORTANTE: todas las variables en typescript deben tener un tipo de dato, ya sea primitivo (number, string...) o un dato abstracto (Object, interface creada…)

let variable = nombre_variable:tipo = 'valor';

Las variables deben definirse con los siguientes límites:
No pueden tener espacios.
No empezar con un número.
No puede ser una palabra reservada (if, for, while…).

let variable = nombre variable:tipo = 'valor';
let variable = 1variable:tipo = 'valor';
let variable = if:tipo = 'valor';

Typescript define unos tipos de datos primitivos para la declaración de las variables:

let booleano = variable:boolean = true | false;
let numero = variable:number = 1;
let string = variable:string = 'texto';
let variable = variable:any = 'todos los tipos';
let numArray = variable:number[] = [1,2,3];
let varios = variable:number|string = 1 o 'texto';

## Arrays

Al igual que en Javascript, TypeScript permite definir Arrays para un conjunto de valores.

## Interfaces

Declara una serie de propiedades que deben ser implementados por una o más clases. Normalmente se utilizan para definir “tipos” que no tenemos disponibles por defecto con los primitivos de angular 😉.

Las interfaces en TypeScript se declaran de manera bastante similar a la de las clases, indicando la lista de propiedades y métodos que contendrán 🎯 Solo hay un detalle fundamental: las propiedades no pueden tener valores y los métodos no pueden tener código para su implementación.

- No se pueden instanciar
- Las define la clase la cual se va a trabajar con el tipo de dato que se va a definir.

## POO (Programación Orientada a Objetos)

Contiene clases que se componen de atributos y metodos.

## Objetos

object vs Object
Object es un tipo de dato no primitivo.

Cuidado al declarar a una variable con el tipo object porque no es lo mismo que crear un Object nativo de JS.

## Clases

Podemos utilizar plantillas para la creación de objetos de datos según un modelo predefinido. Se utilizan para representar entidades o conceptos. Define un conjunto de variables y métodos para operar con dichos datos 🙌.

Es conveniente declarar un constructor para realizar una correcta inicialización de las variables.

Cuando le ponemos el constructor a una clase ya se puede crear un objeto de esa clase.
El constructor es un metodo que se ejecuta automaticamente cuando se crea un objeto de la clase.

## Tipos genericos

Es una forma de definir dinamicamente los tipos de datos que se van a usar en una clase.

## Decoradores

Son una característica exclusiva de typescript, por lo que cuando son compilados a es5, se crean funciones que expanden las clases de forma diferente.
El objetivo de los decoradores es cambiar las clases cuando son definidas.

Es un modificador que cambia la estructura cuando se le pasa por parametro.

## Modulos

A partir de ECMAScript 2015, JavaScript tiene un concepto de módulos. TypeScript lo comparte y se puede definir de la siguiente manera:
Un módulo puede contener clases, variables o funciones. Sólo son visibles en el ámbito del módulo a menos que usemos los siguientes términos:

IMPORT: Permite al módulo utilizar los componentes del módulo importado.
EXPORT:Permite que el contenido del módulo sea visible fuera del ámbito del mismo.

Las declaraciones (variable, const, función, clase, etc.) se pueden exportar para ser importadas en otro módulo.
Tenemos dos tipos de exportación: nombrada y predeterminada.
Las importaciones nombradas permiten especificar el elemento a importar.
