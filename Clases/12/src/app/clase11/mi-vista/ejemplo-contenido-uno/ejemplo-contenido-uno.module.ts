import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcomponenteUnoComponent } from './subcomponente-uno/subcomponente-uno.component';
import { SubcomponenteDosComponent } from './subcomponente-dos/subcomponente-dos.component';
import { ContenidoUnoRoutingModule } from './contenido-uno-routing.module';



@NgModule({
  declarations: [
    SubcomponenteUnoComponent,
    SubcomponenteDosComponent
  ],
  imports: [
    CommonModule,
    ContenidoUnoRoutingModule
  ]
})
export class EjemploContenidoUnoModule { }
