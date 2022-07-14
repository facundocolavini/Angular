# RXJS

## ITERADORES

¡Vamos a avanzar! El Patrón Iterador es otro patrón de diseño 🎨.
¿Para qué se utiliza? Para recorrer una colección de elementos uno a uno, cumpliendo con las características de las funciones puras y permite recorrer una colección, de cualquier tipo, sin conocer su estructura 🙌.

a API de un Iterador expone típicamente 2 métodos:
hasNext() para saber si todavía quedan elementos en la colección.
next() para acceder al siguiente elemento de la colección

Veamos un ejemplo. Aquí implementamos el patrón observable 👇

```ts
let myArray = new IterableList(“Pera”, “Banana”, “Manzana”, “Naranja”, “Frutilla”);
let iterator = myArray.iterator();
while (iterator.hasNext()) {
 console.log(iterator.next());
}

```

## PROMESAS

Una promesa resuelve ✅ o rechaza ❎.
Si todo ha ido bien al ejecutar then tendremos el valor esperado. En otro lugar, dentro del catch, tendremos el error que hemos devuelto. En este caso, simplemente con reject.

Dentro de la clase Usuario definimos un método obtenerUsuario.
La ejecución de este método puede tener dos resultados:
traer el usuario o fallar.

### Promesa

```ts
export class Usuario {
  obenerUsuario() {
    return new Promise((resolve, reject) => {
      if (!reject) {
        return resolve([{ name: 'adrgon' }]);
      }
      return reject({ msg: 'error' });
    });
  }
}
```

### PATRÓN ITERADOR

Usamos la clase Usuario en la cual puedo:
Devolver el usuario dragon.
Devolver error.

```ts
let usuario = new Usuario();
let promise = user.obtenerUsuario();

promise
  .then((usuario) => {
    console.log(usuario[0]); //{name: 'dragon'}
  })
  .catch((error) => {
    console.log(error); //Uncaught {msg: "error"}
  });
```

# OBSERVABLES, SUBJECTS & SUBSCRIPTIONS

## OBSERVABLES vs PROMESAS

Promesas
Devuelven un único resultado.

Observables
Permiten definir una secuencia a partir de todos los métodos que nos ofrecen.

Implementamos la clase Usuario y el método obtenerUsuario pero mediante observables.

```ts
let usuario = new Usuario();
let usuarioObservable = user.obtenerUsuario();
usuarioObservable.subscribe(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);
```

Los observables son solo productores de datos. Se denominan de este modo porque pueden emitir valores múltiples a lo largo del tiempo.
👉 No consumen datos.

Se crean a partir de eventos DOM con operadores como From, Of, etcétera.
🤔 En el proyecto Angular, un ejemplo común de observable es un flujo de respuesta HTTP, pulsaciones de teclas o cambios de forma reactiva angular.

```ts
import { Observable } from 'rxjs';
const observable = new Observable((observer) => {
  observer.next(Math.random());
  observer.next('Second value emitted');
});
observable.subscribe((val) => {
  console.log('Value emitted:', val);
});
```

## SUBJECTS

Los Subjects pueden comportarse como Observables y también se pueden usar como observadores para suscribirse a un observable (esto se debe a que implementan la interfaz de observador) 🤩.

Se pueden utilizar cuando se desee la multidifusión de valores observables, es decir que cada función de suscriptor debe recibir el mismo valor producido por el observable.
Veamos el ejemplo 👀

```ts
import { Subject, fromEvent } from 'rxjs';
const click$ = fromEvent(document, 'click');
const subject = new Subject();
subject.subscribe((data) => {
  console.log('First Subs x: ', data.clientX, 'y: ', data.clientY);
});
subject.subscribe((data) => {
  console.log('Second Subs x: ', data.clientX, 'y: ', data.clientY);
});
click$.subscribe(subject);
```

## OBSERVABLES vs SUBJECTS

Según los aportes realizados podemos establecer las diferencias:

Obsevables:Son productores de datos.
Subjects: Pueden ser tanto productores como consumidores de datos.

## SUBSCRIPTIONS

Subscription es un objeto que representa un recurso disponible, generalmente la ejecución de un observable ✨.
Una suscripción tiene un método importante unsubscribe, que no tiene argumentos y simplemente elimina el recurso que tiene la suscripción. En versiones anteriores de RxJS, la suscripción se llamaba "desechable".

Veamos un ejemplo 👇

```ts
import { interval } from 'rxjs';
const observable = interval(1000);
const subscription = observable.subscribe((x) => console.log(x));
subscription.unsubscribe();
```

## PIPE OPERATOR

RxJS cuenta con una gran cantidad de operadores para manejar flujos de datos: map, filter, etcétera 🚀.
En versiones anteriores a RxJS 5.5, los operadores de RxJS se aplicaban del mismo modo, pero la forma de importarlos por separado era muy incómoda (Oriol, 2019).

Para solucionar la forma de importar añadieron el método pipe al objeto Observable 🙌.
El método pipe te permite aplicar varios operadores sobre el flujo de datos de forma secuencial.

Filtramos los elementos y los devolvemos en minúsculas 🤔

```ts
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
const myObs = from('Hello world');
const filteredObs = myObs.pipe(
  filter((char) => char != ' '),
  map((char) => char.toUpperCase())
);
const subscription = filteredObs.subscribe((char) => console.log(char));
```

## PIPE ASYNC

Async es un pipe que nos permite mostrar el resultado devuelto por un observable o promesa directamente en la vista sin necesidad de implementarlo por completo en el componente.✅

Se actualiza de forma automática por lo que no es necesario implementarlo más de una vez o destruirlo cuando se ejecuta OnDestroy.

Ejemplo pipe async

```ts
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  asyncPromise: Promise<string>;
  asyncObservable: Observable<string>;
  ngOnInit() {
    this.promesa = this.conPromise('Promise');
    This.observable = this.conObservable('Observable');
  }
  conPromise(value: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value), 2000);
    });
  }
  conObservable(value: string): Observable<string> {
    return of(value).pipe(delay(2000));
  }
}
```

```html
<h1>Prueba pipe async</h1>

<div>{{promesa | async}}</div>

<div>{{observable | async}}</div>
```

# OPERADORES RxJS

Son una parte muy importante de RxJs con sus bases establecidas en características de la programación funcional.
Nos permiten realizar diversas tareas tales como el filtrado de datos, transformaciones e incluso uniones entre varios streams.

xiste una amplia gama y variantes de operadores 🤯. SCAN es uno de los operadores más usados de RxJS, pero no es el único.

👉 También podemos encontrar: Audit, buffer, connect, count, debounce, delay, dematerialize, distinct, distinct, every, expand, filter, finalize, find, findIndex, first, last, map, materialize, max merge, min, pairwise, reduce, repeat, retry, sample, scan, share, single, skip, tap.

## Filter

Emite los valores que cumplan la condición proporcionada en la función👇

```ts
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
const source = from([1, 2, 3, 4, 5]);
//filtramos los pares
const f = source.pipe(filter((num) => num % 2 === 0));
const subscribe = example.subscribe((val) => console.log(`Par: ${val}`));

const source = from([
  { name: 'Juan', age: 31 },
  { name: 'María', age: 25 },
]);
//Filtramos los usuarios mayores de 30 años
const example = source.pipe(filter((person) => person.age >= 30));
const subscribe = example.subscribe((val) =>
  console.log(`Mayor de 30: ${val.name}`)
);
```

## Tap

Tap permite realizar acciones antes o después de que se ejecute otro filtro en función de dónde se coloque. Tap no modifica el valor del observable 😉:

```ts
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5);
const example = source.pipe(
  tap((val) => console.log(`ANTES DE MAP: ${val}`)),
  map((val) => val + 10),
  tap((val) => console.log(`DESPUES DE MAP: ${val}`))
);
const subscribe = example.subscribe((val) => console.log(val));
```

## Map

Transforma los valores emitidos desde el observable en base a una función de proyección proporcionada. Es similar a Array.map, excepto que opera en cada valor emitido por un observable a medida que ocurre en lugar de cada valor contenido dentro de un array🙌:

```ts
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
click$
  .pipe(
    map((event) => ({
      x: event.clientX,
      y: event.clientY,
    }))
  )
  .subscribe(console.log);
```

# De alto orden high order

Los Observables suelen emitir valores simples como cadenas y números, pero hay ocasiones en que es necesario obtener Observables de Observables😵, los llamados Observables de alto orden u orden superior:

```ts
import { of, interval } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

const letters = of('a', 'b', 'c');
const result = letters.pipe(
  mergeMap((x) => interval(1000).pipe(map((i) => x + i)))
);
result.subscribe((x) => console.log(x));
```

Cuando se completan todos los observables, emite el último valor emitido de cada uno de ellos, “sincroniza” varios observables y nos da a saber cuándo finalizan 👀

```ts
import { interval, forkJoin, of } from 'rxjs';
import { delay, take } from 'rxjs/operators';

const myPromise = (val) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
  );

const example = forkJoin({
  sourceOne: of('Hello'),
  sourceTwo: of('World').pipe(delay(1000)),
  sourceThree: interval(1000).pipe(take(1)),
  sourceFour: interval(1000).pipe(take(2)),
  sourceFive: myPromise('RESULT'),
});

const subscribe = example.subscribe((val) => console.log(val));
```
