# ANGULAR MATERIAL

https://material.angular.io/

InstalaciCón

Antes de instalar Angular Material, tenemos que tener un proyecto de Angular creado. Esto nos lleva a una serie de pasos a seguir para su correcta incorporación.

ng new angularMaterial
cd angularMaterial
ng add @angular/material

ng g module modules/material –flat

agregar en nuestro modulos todos los componentes que vamos agregar

Como hacer deploy de nuestra app con

La bandera de -prod trabaja con el archivo environment.ts
para poder comunicarnos con servidores.

ng build -prod
