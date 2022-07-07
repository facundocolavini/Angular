import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversorPipe } from './components/conversor.pipe';
import { MiPropiaDirective } from './components/directivas/mi-propia.directive';
import { RepetirDirective } from './components/directivas/repetir.directive';

@NgModule({
  declarations: [
    AppComponent,
    ConversorPipe,
    MiPropiaDirective,
    RepetirDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
