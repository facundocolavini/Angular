import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoUnoComponent } from './contenido-uno/contenido-uno.component';
import { ContenidoDosComponent } from './contenido-dos/contenido-dos.component';
import { MiVistaComponent } from './mi-vista/mi-vista.component';



@NgModule({
  declarations: [
    ContenidoUnoComponent,
    ContenidoDosComponent,
    MiVistaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MiVistaModule { }
