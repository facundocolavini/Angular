import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
/* Http  */
import {HttpClientModule} from '@angular/common/http';

/* Routes module */
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { HomeComponent } from './components/home/home.component';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsModule } from './modules/students/students.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoursesListComponent,
    HomeComponent,
    SpinnerComponent,
    ButtonsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StudentsModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
