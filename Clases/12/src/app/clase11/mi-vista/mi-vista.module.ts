import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjemploContenidoUnoComponent } from './ejemplo-contenido-uno/ejemplo-contenido-uno.component';
import { EjemploContenidoDosComponent } from './ejemplo-contenido-dos/ejemplo-contenido-dos.component';
import { MiVistaComponent } from './mi-vista.component';
import { MiVistaRoutingModule } from './mi-vista-routing.module';
import { EjemploContenidoUnoModule } from './ejemplo-contenido-uno/ejemplo-contenido-uno.module';
import { CompartidoModule } from 'src/app/compartido/compartido.module';



@NgModule({
  declarations: [
    EjemploContenidoUnoComponent,
    EjemploContenidoDosComponent,
    MiVistaComponent
  ],
  imports: [
    CommonModule,
    MiVistaRoutingModule,
    EjemploContenidoUnoModule,
    CompartidoModule
  ]
})
export class MiVistaModule { }
