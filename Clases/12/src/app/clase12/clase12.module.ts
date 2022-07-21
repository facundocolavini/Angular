import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiVistaPrincipalComponent } from './componentes/mi-vista-principal/mi-vista-principal.component';
import { MiVistaHijaComponent } from './componentes/mi-vista-hija/mi-vista-hija.component';
import { MiDirectivaDirective } from './directivas/mi-directiva.directive';
import { CompartidoModule } from '../compartido/compartido.module';



@NgModule({
  declarations: [
    MiVistaPrincipalComponent,
    MiVistaHijaComponent,
    MiDirectivaDirective
  ],
  imports: [
    CommonModule,
    CompartidoModule
  ],
  exports: [
    MiVistaPrincipalComponent
  ]
})
export class Clase12Module { }
