import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneradoCliComponent } from './prueba-componentes/generado-cli/generado-cli.component';
import { GeneradoManoComponent } from './prueba-componentes/generado-mano/generado-mano.component';
import { MiDirectivaDirective } from './directivas/mi-directiva.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HijoComponent } from './clase-5/hijo/hijo.component';
import { FormularioComponent } from './clase-6/componentes/formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modulos/material/material.module';
import { MaterialEjemplosComponent } from './clase7/material-ejemplos/material-ejemplos.component';
import { EjemploModalComponent } from './clase7/ejemplo-modal/ejemplo-modal.component';
import { ConversorPipe } from './clase8/pipes/conversor.pipe';
import { MiPropiaDirective } from './clase8/directivas/mi-propia.directive';
import { RepetirDirective } from './clase8/directivas/repetir.directive';
import { PruebaServiciosComponent } from './clase9/componentes/prueba-servicios/prueba-servicios.component';
import { PruebaDosServiciosComponent } from './clase9/componentes/prueba-dos-servicios/prueba-dos-servicios.component';
import { PruebaObservablesComponent } from './clase10/prueba-observables/prueba-observables.component';
import { HttpClientModule } from '@angular/common/http';
import { PruebaDosObservablesComponent } from './clase10/prueba-dos-observables/prueba-dos-observables.component';
import { PruebaTresObservablesComponent } from './clase10/prueba-tres-observables/prueba-tres-observables.component';
import { EjemploUnoComponent } from './clase11/ejemplo-uno/ejemplo-uno.component';
import { EjemploDosComponent } from './clase11/ejemplo-dos/ejemplo-dos.component';
import { RoutingModule } from './routing.module';
import { MiVistaModule } from './clase11/mi-vista/mi-vista.module';
import { Clase12Module } from './clase12/clase12.module';
import { CompartidoModule } from './compartido/compartido.module';

@NgModule({
  declarations: [
    AppComponent,
    GeneradoCliComponent,
    GeneradoManoComponent,
    MiDirectivaDirective,
    HijoComponent,
    FormularioComponent,
    MaterialEjemplosComponent,
    EjemploModalComponent,
    ConversorPipe,
    MiPropiaDirective,
    RepetirDirective,
    PruebaServiciosComponent,
    PruebaDosServiciosComponent,
    PruebaObservablesComponent,
    PruebaDosObservablesComponent,
    PruebaTresObservablesComponent,
    EjemploUnoComponent,
    EjemploDosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RoutingModule,
    MiVistaModule,
    CompartidoModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
