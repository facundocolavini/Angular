# Como agregar bootstrap a nuestro proyecto

Frameworks/bootstrap
Con:

- Con cli
- CDN

# Comunicaci贸n entre componentes

Una aplicaci贸n Angular puede contener miles de componentes y la gesti贸n de la comunicaci贸n de datos puede resultar compleja 馃樀.
Para superar esto, resulta muy 煤til tener una comunicaci贸n de componentes padre-hijo para el pasaje de los datos.

Angular nos permite contar con un componente secundario y un componente principal 馃З.
Este componente secundario tiene su propia l贸gica, dise帽o y puede actuar como una peque帽a unidad de funcionalidad para el componente principal.

# Anidacion de componentes

Que es un componente anidado

Un componente anidado es similar a cualquier otro componente que usamos en una aplicaci贸n Angular con la diferencia de que contiene la l贸gica derivada de otro componente principal

Para que sirven

Para hacer logica reutilizable en las unidades separadas, que sepueden asociar con uno o mas componentes diferentes a la vez.

Los componentes anidados permiten enviar datos desde el compoente hijo al componente padre para que el componente padre pueda dewsencadenar una accion.

Si no separamos entre componentes copiariamos y pegariamos codigo
constantemente.

Lo mejor es sacar la logica a componentes separados.

## Como comnunicamos el componente padre con el hijo

Pasar datos entre compoentes

Para pasar datos del componente padre y obtener el valor en el componente anidado usamos el @input son decoradores pero no va sobre una clase sino que va sobre una propiedad

@Input
es un decorador, similar a una directiva de atributo, que se utiliza para vincular la expresi贸n a la directiva 馃敆.
El @Input decorador adem谩s sirve para obtener los valores de entrada del componente y el proceso se basa en la instrucci贸n proporcionada.

@Output

Para enviar datos desde un componente secundario a un componente principal, usamos @Output.

El @Output es como una emicion de datos te puede hacer acordar a un evento que cuando pasa algo descencadena algo.
@Output uno de los decoradores m谩s 煤tiles de Angular 馃憖.
Para utilizarlo, el componente principal debe tener una funci贸n que acepte los datos emitidos por el componente secundario.
Obtiene los datos antes de llamar al m茅todo ngOnInit().

@ViewChild
Para consultar un elemento DOM que le permite mannipular , usamos @ViewChild

@ViewChild es un decorador que se utiliza para consultar un elemento DOM que le permite manipular.
Para seleccionar un elemento de la plantilla se pueden utilizar tres par谩metros diferentes:

Selector : Del elemento a consultar

Read Lee un token diferente de los elementos consultados

Static: Indica si se deben resolver los resultados antes de los cambios
