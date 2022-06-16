## Boilerplate de un proyecto

- # .gitignore : node_modules y los archivos de desarrollo

- # src : carpeta donde se encuentran los archivos de codigo

- # .browserlistrc : archivo que contiene la lista de versiones de navegador que se utilizan en el proyecto

- # angular.json : archivo que contiene la configuracion de la aplicacion

- # karma.conf.js : archivo que contiene la configuracion de las pruebas

- # package.json : archivo que contiene la configuracion del proyecto

- # tsconfig.app.json : las configuraciones de typescript
- # tsconfig.json : las configuraciones de typescript

# src:

- /app

- /assets

- /environments : genera una constante publica dentro del proyecto
  donde se puede cambiar el ambiente de desarrollo o produccion

- /main.ts : archivo principal de la aplicacion

- /polyfills.ts : archivo que contiene las funciones que se utilizan en el navegador

- /styles.ts : archivo que contiene las hojas de estilo de la aplicacion

# app:

- /app.routing.module.ts : archivo que contiene el componente raiz de la aplicacion

- /app.module.ts : archivo que contiene el modulo raiz de la aplicacion

# Que es un componente

Un componente rep[resenta una poricon de la aplicacion esta contenido dentro de un modulo. Cada componente define una clase que contiene datos y logica y esta asociado con una plantilla HTML y CSS.

Se puede decir que un componente esta orientado a la experiencia del usuario.

# Que conforma a un componente

- Typescript (lógica)
- SPEC.TS (pruebas)
- HTML (Vista)
- CSS (Estilos)

# Typescript

Un componente puede tener uno o mas archivos este es un factor que dependera de la necesidad de tu proyecto.

El decorador @Component indica que el archivo es un componente.

Luego se puede definir una clase que contiene los datos y logica del componente.

# HTML

Es una plantilla HTML que contiene los elementos que se utilizan en el componente.

# CSS

Es un archivo que contiene las hojas de estilo del componente.

Las propiedades solo afectan a los elementos que se encuentran dentro de la plantilla HTML y de ese mismo componente.

# Como se crea un componente

- Desde Angular CLi
- Generacion Manual

# Desde Angular CLI

ng generate component nombreComponente

# Interfaces

OnInit es una interfaz que se utiliza para definir una funcion que se ejecuta cuando el componente se carga.

OnDestroy es una interfaz que se utiliza para definir una funcion que se ejecuta cuando el componente se destruye.
