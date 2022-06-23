import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConCliComponent } from './componentes/con-cli/con-cli.component';
import { GeneradoAManoComponent } from './componentes/generado-a-mano/generado-a-mano.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { MainComponent } from './componentes/main/main.component';
import { MiDirectivaDirectiva } from './directivas/mi-directiva.directive';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ConCliComponent,
    GeneradoAManoComponent,
    ToolbarComponent,
    MainComponent,
    MiDirectivaDirectiva
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
