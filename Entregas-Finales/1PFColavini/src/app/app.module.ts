import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
/* Http  */
import {HttpClientModule} from '@angular/common/http';

/* Routes */
import { RouterModule,Routes } from '@angular/router';

/* Components */
import { StudentsListComponent } from './components/students-list/students-list.component';
import { AddStudentsComponent } from './components/add-students/add-students.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { HomeComponent } from './components/home/home.component';
import { ModalEditComponent } from './components/modal-edit/modal-edit.component';
import { StudentManagerComponent } from './components/student-manager/student-manager.component';


const routes: Routes = [
  {path: 'alumnos',component:StudentsListComponent},
  {path: 'alumnos/agregar',component:AddStudentsComponent},
  {path: 'cursos', component: CoursesListComponent},
  {path: '', component: HomeComponent},
  {path: '**' , redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentsListComponent,
    AddStudentsComponent,
    CoursesListComponent,
    HomeComponent,
    ModalEditComponent,
    StudentManagerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
