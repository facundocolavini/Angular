## Formularios en Angular / Reactive Forms

# Template Driven

# Reactive Form

Para trabajar con formularios en Angular, el modelo recomendado es el reactivo.
¿Por qué? 🤔 Porque nos permite crear y manipular todo el comportamiento desde el componente para inyectarlo en la vista.

Sus principales ventajas 😎: robustez + escalabilidad.

Los formularios reactivos vienen por defecto cuando creamos una nueva instalación de Angular, pero no vienen importados.

Para trabajar con formularios reactivos ha que importarlos en el app.module.ts

```ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Reactive Form tiene 2 clases importantes

- FormGroup representa un grupo de elementos del formulario
- FormControl es un elemento dentro de un formulario

FormBuilder

Es un servicio , nos da una manera de crear la estructura del form group.

La clase FormBuilder nos permite crear objetos de la clase FormGroup y FormControl con una sintaxis más corta. Es decir, el resultado final será el mismo al que obtenemos con la sintaxis vista anteriormente 😉.

Ventajas

Cuando nosotros vamos escribiendo se van actualizando los elementos donde hay cambios. Ejemplo para validar o buscadores.

Validaciones de Reactive Forms

Otra funcionalidad muy importante de un formulario es la validación de las entradas de datos del usuario y la información que se le provee al mismo indicando los datos mal cargados ❌.

Cuando utilizamos formularios reactivos la lógica de la validación se encuentra en la clase (archivo _.ts) y no en la vista (archivo _.html).

Angular provee una clase llamada 'Validators' que contiene una serie de métodos estáticos para validar entradas de datos muy comunes como:

-Estructura de correos // NO ES TAN RECOMENDABLE
-Cantidad de caracteres
-Valores máximos y mínimos
-Otros similares

```ts
formCorreo: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],

```

La asignación de los métodos de validación se hace cuando se crea el objeto de la clase FormControl.
Veremos con un ejemplo como configuramos distintos métodos de validación a los controles de un formulario ✍.

Para las validaciones a nivel de campo lo más recomendable es hacerlo cuando se crea el formulario con FormBuilder. Para ello hay que importar la clase Validators:

```ts
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

formularioContacto = this.fb.group({
  nombre: ['', [Validators.required, Validators.minLength(10)]],
  email: ['', [Validators.required, Validators.email]],
  mensaje: ['', [Validators.required, Validators.maxLength(500)]],
});
```

Una vez creadas las validaciones podemos trabajar con ellas en nuestra vista para poder mostrar mensajes de error 💬:

```ts
<form [formGroup]="formularioContacto" (ngSubmit)="submit()">
    <input type="text" formControlName="nombre" required>
    <span *ngIf="this.formularioContacto.get('nombre')?.errors?.['required']">(El nombre no puede quedar vacío)</span>
    <span *ngIf="this.formularioContacto.get('nombre')?.errors?.['minlength']">(Como mínimo 10 caracteres)</span>
    <input type="text" formControlName="mail">
    <span *ngIf="this.formularioContacto.get('mail')?.errors?.['required']">(El mail no puede quedar vacío)</span>
    <span *ngIf="this.formularioContacto.get('mail')?.errors?.['email']">(El mail no es válido)</span>
    <textarea rows="10" cols="70" formControlName="mensaje"></textarea>
    <div *ngIf="this.formularioContacto.get('mensaje')?.errors?.['required']">(El mensaje no puede quedar vacío)</div>
    <div *ngIf="this.formularioContacto.get('mensaje')?.errors?.['maxlength']">(Como máximo 500 caracteres)</div>
    <button type="submit">Confirmar</button>
</form>

```

Hay 2 tipos de formas para crear formularios

Template driven y Reactive Form

Enfoque orientado a la vista (plantillas)
Utilizan el FormsModule
Asincrónicos
Lógica basada en componente .html

Las variables de referencia de plantilla de Angular proporcionan una API útil a través de la cual puede interactuar con elementos DOM y componentes secundarios directamente en el código Angular 😄.
Las utilizaremos para ambos tipos de formularios. Además, pueden ser usadas tanto en componentes como en servicios ✅.

Podemos empezar usando template reference variables dentro de la vista del componente en el archivo HTML agregando una referencia de este estilo #myTestDiv. Esta va a establecer una referencia a la etiqueta div 👇

```html
<div id="test-div" #myTestDiv></div>
```

Dentro del componente angular usamos el decorador @ViewChild para enlazar la plantilla creada en la vista:

```ts

@ViewChild('myTestDiv') myTestDiv: ElementRef;
```

Este elementRef le da a su componente acceso directo al elemento HTML:

```ts
const divEl: HTMLDivElement = this.myTestDiv.nativeElement;
```

Con su componente hijo capturado con éxito, puede acceder a él de esta manera:

Con la misma sintaxis anterior, puede crear una variable de referencia de plantilla en un componente secundario como este:

```ts
<app-test-component #myTestComp></app-test-component>
```

Con su componente hijo referenciado, puede obtener acceso a él en su clase de componente Angular de esta manera:

```ts
@ViewChild('myTestComp') myTestComp: TestComponent
```

Con su componente hijo capturado con éxito, puede acceder a él de esta manera:

```ts

ngAfterViewInit(): void {
  this.myTestComp.saveTheWorld();
}

```

# ngModel:

La directiva ngModel se trata básicamente de un enlace unidireccional, entre algo que tienes en la definición del componente con un campo de formulario del template (vista) del componente 🔗.

# ngForm:

La directiva ngForm crea una instancia de nivel superior y la vincula con un formulario para rastrear el valor agregado y el estado de validación.
Se utiliza con la etiqueta html <form> y está directamente relacionada con las clases FromControl y FromGrup.

# POR QUÉ ES IMPORTANTE CONOCER TEMPLATE DRIVEN?

A partir de la versión 11 de Angular, el formulario Template Driven está obsoleto. Sin embargo, es importante darle cierto protagonismo para que puedas ver las diferencias entre un tipo de formulario y otro, a los fines de identificar los puntos a abordar en casos de necesitar hacer una migración 📂.

# QUÉ SON LOS REACTIVE FORMS?

Esta es la otra opción que nos da Angular para el manejo de datos de formularios. Está específicamente orientado al componente, en lugar de la vista. Para el módulo principal se utiliza para la construcción de este tipo de formularios ReactiveFormsModule, que nos provee Angular 📄.
