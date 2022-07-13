import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaServicioComponent } from './components/prueba-servicio/prueba-servicio.component';
import { SegundoServicioComponent } from './components/segundo-servicio/segundo-servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaServicioComponent,
    SegundoServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
