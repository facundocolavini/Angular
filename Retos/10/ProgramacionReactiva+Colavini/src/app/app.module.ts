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
import { StudentManagerComponent } from './components/student-manager/student-manager.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditStudentComponent } from './components/edit-student/edit-student.component';

const routes: Routes = [
  {path: 'students',component:StudentManagerComponent},
  {path: 'students/create',component:AddStudentsComponent},
  {path: 'students/edit/:studentId',component:EditStudentComponent},
  {path: 'students/student/:studentId',component:StudentDetailsComponent},
  {path: 'courses', component: CoursesListComponent},
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
    StudentManagerComponent,
    SpinnerComponent,
    StudentDetailsComponent,
    ButtonsComponent,
    EditStudentComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
