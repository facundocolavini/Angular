## Que es angular

Es un framework front end de codigo abierto desarrollado y mantenido por Google.
Se utiliza para cerar paginas weeb de tipo SPA, es decir,Single Page Application.
Es un conjunto de herramientas que va a trabajar del lado del cliente en un navegador ya que es Javascript.

Trabaja con peticiones asyncronas HTTP.
No trabaja directamente con JavaScript sino que trabaja con TypeScript.

## TypeScript

TypeScript hace que el codigo sea mas legible y facil de leer. Es un lenguaje de programacion que se utiliza en el desarrollo de aplicaciones web. Es cercano mas a orientado a objetos que a orientado a funciones.
Es fuertemente tipado.

## Que es el front end

Front end: es el lado de la aplicacion que se muestra al usuario.
Comunica con el servidor para obtener los datos.

## Que es el back end

El back end es el lado del servidor que se encarga de procesar las peticiones del usuario.

## Cliente

Cliente: es el navegador que se encarga de interactuar con el back end.

## Servidor

Servidor: es el computador que se encarga de procesar las peticiones del cliente.

## Single Page Application

SPA: es una aplicacion que se puede abrir en una sola pagina.
Donde recarga el documento cuando se cambia de pagina pero
la estructura de la pagina no se cambia.
No se traslada sobre varios archivos html.

## CLI Angular

Para mantener una aplicacion en Angular se utiliza el comando CLI Angular.
Trae una herramienta que se encarga de hacer el trabajo de desarrollo.Se puede hacer testing, compilacion, optimizacion, etc.

## Angular JS vs Angular

Son distintos frameworks.
Angular 2 es angular.
Angular 1 es angular JS.
Angular tiene una curva de aprendizaje bastante alta al principio, pero luego de dominarlo te brindara todo lo que necesitas para construir aplicaciones web en el menor tiempo posible.
Las demas herramientas por se librerias requieren mayor tiempo de configuracion y curva de aprendizaje para integrar el resto de librerias de su ecosistema.
El rendimiento es totalmente distinto en Angular 1 y Angular 2.Por eso se lanzo en el 2016 la version 2.
Si es un proyecto chico no es recomendable usar Angular.
Si es un proyecto grande es recomendable usar Angular.

## Cuando utilizar Angular

Aplicaciones web dinamicas: Muestra el contenido segun el usuario que esta accendiendo y el cliente (web o movil) que esta consumiendo.
Aplicaciones web de nivel empresarial: Reutiliza componentes, modulos y bibliotecas externas.
Aplicaciones d euna sola pagina(spa)
Aplicaciones web Progresivas (PWA progresiva-web app)

## Cuando NO utilizar Angular

Cuando tienes paginas con contenido estatico.
Aplicaciones diseñadas en un estilo de microservicios.
Sitios web optimizados para motores de busqueda (SEO).

## Instalacion de Angular CLI

### Como instalar angulas CLI

https://www.c-sharpcorner.com/article/how-to-install-angular/

### Comandos para el Primer proyecto

- Tener npm instalado
- Tener node instalado
- npm install -g angular-cli //trae la ultima version
- ng new nombre_proyecto //crea un proyecto con el nombre que le pongamos
- cd nombre_proyecto //entramos al proyecto
- ng serve //inicia el servidor
- ng serve -o // Hace lo mismo que el comando ng serve pero corre un navegador en el puerto por defecto (Recomendado)
- ng serve -o --port=4200 // Con este comando podemos elegir el puerto en el que se va a ejecutar nuestro proyecto

POR DEFAULT ANGULAR CORRE EN EL PORT 4200
