import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConCliComponent } from './componentes/con-cli/con-cli.component';
import { GeneradoAManoComponent } from './componentes/generado-a-mano/generado-a-mano.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { MainComponent } from './componentes/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    ConCliComponent,
    GeneradoAManoComponent,
    ToolbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
